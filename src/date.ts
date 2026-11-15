import dayjs from 'dayjs';
import orange, { Lang } from './orange';

export const DateFormat = {
  DATE: 'DATE',
  DATE_HYPHEN: 'DATE_HYPHEN',
  DATE_TIME: 'DATE_TIME',
  DATE_TIME_MIN: 'DATE_TIME_MIN',
  MONTH_DAY: 'MONTH_DAY',
  MONTH_DAY_TIME: 'MONTH_DAY_TIME',
  MONTH_DAY_TIME_MIN: 'MONTH_DAY_TIME_MIN',
  YEAR_MONTH: 'YEAR_MONTH',
  TIME: 'TIME',
  TIME_MIN: 'TIME_MIN',
} as const;

export type DateFormatType = typeof DateFormat[keyof typeof DateFormat];

const REGEX_DIGITS_8 = /^\d{8}$/;
const REGEX_CALENDAR_DATE = /^(\d{4})([-/.])(\d{1,2})\2(\d{1,2})(?=$|[T\s])/i;
const REGEX_DASH = /-/g;

const EN_FORMAT_MAP: Record<string, string> = {
  [DateFormat.DATE]: 'MMM DD, YYYY',
  [DateFormat.DATE_HYPHEN]: 'MMM DD, YYYY',
  [DateFormat.DATE_TIME]: 'MMM DD, YYYY HH:mm:ss',
  [DateFormat.DATE_TIME_MIN]: 'MMM DD, YYYY HH:mm',
  [DateFormat.MONTH_DAY]: 'MMM DD',
  [DateFormat.MONTH_DAY_TIME]: 'MMM DD HH:mm:ss',
  [DateFormat.MONTH_DAY_TIME_MIN]: 'MMM DD HH:mm',
  [DateFormat.YEAR_MONTH]: 'MMM YYYY',
  [DateFormat.TIME]: 'HH:mm:ss',
  [DateFormat.TIME_MIN]: 'HH:mm',
  'YYYY/MM/DD': 'MMM DD, YYYY',
  'yyyy/MM/dd': 'MMM DD, YYYY',
  'YYYY-MM-DD': 'MMM DD, YYYY',
  'yyyy-MM-dd': 'MMM DD, YYYY',
  'YYYY.MM.DD': 'MMM DD, YYYY',
  'YYYY/MM/DD HH:mm:ss': 'MMM DD, YYYY HH:mm:ss',
  'yyyy/MM/dd HH:mm:ss': 'MMM DD, YYYY HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss': 'MMM DD, YYYY HH:mm:ss',
  'yyyy-MM-dd HH:mm:ss': 'MMM DD, YYYY HH:mm:ss',
  'YYYY/MM/DD HH:mm': 'MMM DD, YYYY HH:mm',
  'yyyy/MM/dd HH:mm': 'MMM DD, YYYY HH:mm',
  'YYYY-MM-DD HH:mm': 'MMM DD, YYYY HH:mm',
  'yyyy-MM-dd HH:mm': 'MMM DD, YYYY HH:mm',
  'YYYY年MM月': 'MMM YYYY',
  'YYYY-MM': 'MMM YYYY',
  'MM-dd HH:mm': 'MMM DD HH:mm',
  'MM-dd HH:mm:ss': 'MMM DD HH:mm:ss',
  'MM/DD HH:mm': 'MMM DD HH:mm',
  'MM/DD HH:mm:ss': 'MMM DD HH:mm:ss',
  'MM/dd': 'MMM DD',
  'MM-DD': 'MMM DD',
  'MM/DD': 'MMM DD',
};

const ZH_FORMAT_MAP: Record<string, string> = {
  [DateFormat.DATE]: 'YYYY/MM/DD',
  [DateFormat.DATE_HYPHEN]: 'YYYY-MM-DD',
  [DateFormat.DATE_TIME]: 'YYYY/MM/DD HH:mm:ss',
  [DateFormat.DATE_TIME_MIN]: 'YYYY/MM/DD HH:mm',
  [DateFormat.MONTH_DAY]: 'MM/DD',
  [DateFormat.MONTH_DAY_TIME]: 'MM/DD HH:mm:ss',
  [DateFormat.MONTH_DAY_TIME_MIN]: 'MM/DD HH:mm',
  [DateFormat.YEAR_MONTH]: 'YYYY/MM',
  [DateFormat.TIME]: 'HH:mm:ss',
  [DateFormat.TIME_MIN]: 'HH:mm',
  'yyyy/MM/dd': 'YYYY/MM/DD',
  'yyyy-MM-dd': 'YYYY-MM-DD',
  'yyyy/MM/dd HH:mm:ss': 'YYYY/MM/DD HH:mm:ss',
  'yyyy-MM-dd HH:mm:ss': 'YYYY-MM-DD HH:mm:ss',
  'yyyy/MM/dd HH:mm': 'YYYY/MM/DD HH:mm',
  'yyyy-MM-dd HH:mm': 'YYYY-MM-DD HH:mm',
  'MM-dd HH:mm': 'MM-DD HH:mm',
  'MM-dd HH:mm:ss': 'MM-DD HH:mm:ss',
  'MM/dd': 'MM/DD',
};

function parseCompactDate(date: string): dayjs.Dayjs | null {
  const parsed = dayjs(date);
  return parsed.isValid() && parsed.format('YYYYMMDD') === date ? parsed : null;
}

export function parseDate(date: unknown): dayjs.Dayjs | null {
  if (date === null || date === undefined || date === '' || date === '--') {
    return null;
  }

  if (dayjs.isDayjs(date)) {
    return date.isValid() ? date : null;
  }

  if (date instanceof Date) {
    return Number.isNaN(date.getTime()) ? null : dayjs(date);
  }

  if (typeof date === 'number') {
    // 8-digit number like 20261114
    if (Number.isInteger(date) && date >= 19000000 && date <= 20999999) {
      return parseCompactDate(String(date));
    }
    // Unix timestamp in seconds
    if (date > 0 && date < 10000000000) {
      return dayjs(date * 1000);
    }
    const d = dayjs(date);
    return d.isValid() ? d : null;
  }

  if (typeof date === 'string') {
    const trimmed = date.trim();
    // 8-digit string like "20261114"
    if (REGEX_DIGITS_8.test(trimmed)) {
      return parseCompactDate(trimmed);
    }

    const calendarDate = trimmed.match(REGEX_CALENDAR_DATE);
    if (calendarDate) {
      const [datePart, year, , month, day] = calendarDate;
      const parsed = parseCompactDate(`${year}${('0' + month).slice(-2)}${('0' + day).slice(-2)}`);
      if (!parsed || datePart === trimmed) {
        return parsed;
      }
    }

    const normalized = trimmed.replace(REGEX_DASH, '/');
    const d = dayjs(normalized);
    if (d.isValid()) {
      return d;
    }
    const direct = dayjs(trimmed);
    return direct.isValid() ? direct : null;
  }

  return null;
}

export function getDisplayFormat(formatOrType: string = DateFormat.DATE, language = orange.lang): string {
  const formats = language === Lang.EN_US ? EN_FORMAT_MAP : ZH_FORMAT_MAP;
  const format = formatOrType || DateFormat.DATE;
  return Object.prototype.hasOwnProperty.call(formats, format) ? formats[format] : format;
}

export function formatDate(
  date: unknown,
  formatOrType: string = DateFormat.DATE,
  language = orange.lang,
  placeholder = '--',
): string {
  const parsed = parseDate(date);
  if (!parsed) {
    return placeholder;
  }

  const targetFormat = getDisplayFormat(formatOrType, language);
  return language === Lang.EN_US ? parsed.locale('en').format(targetFormat) : parsed.format(targetFormat);
}
