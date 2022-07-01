import { DEFAULT_PLACEHOLDER } from './constant/default';
import { stringNumber } from './types/common/type';

export interface IDateDict {
  yyyy: number;
  M: number;
  d: number;
  H: number;
  m: number;
  s: number;
  MM: string;
  dd: string;
  HH: string;
  mm: string;
  ss: string;
}

/**
 * Get date dictionary
 *
 * @param {string | number} date The date to convert
 *
 */
function getDateDict(date: stringNumber): IDateDict {
  const currentDate: Date = new Date(date);

  return {
    yyyy: currentDate.getFullYear(),
    M: currentDate.getMonth() + 1,
    d: currentDate.getDate(),
    H: currentDate.getHours(),
    m: currentDate.getMinutes(),
    s: currentDate.getSeconds(),
    MM: (`${currentDate.getMonth() + 101}`).substr(1),
    dd: (`${currentDate.getDate() + 100}`).substr(1),
    HH: (`${currentDate.getHours() + 100}`).substr(1),
    mm: (`${currentDate.getMinutes() + 100}`).substr(1),
    ss: (`${currentDate.getSeconds() + 100}`).substr(1),
  };
}

interface IOption {
  isNoSignDate?: boolean;
}

/**
 *
 * Conversion time format
 *
 * @category Date
 * @since 0.0.1
 * @param {string | number} date The date to convert
 * @param {string} format yyyy, M, MM, dd, d, HH, H, mm, m, ss, s
 * @param {Object} [option = {}]
 * @param {boolean} [option.isNoSignDate = false] is no sign date, e.g. 20211121
 * @returns {string}
 * @example
 *
 * dateFormat(1548297785895, 'yy
 * yy-MM-dd HH:mm:ss')
 * // => 2019-01-24 10:43:05
 *
 */
function dateFormat(date: Date | stringNumber, format = 'yyyy-MM-dd HH:mm:ss', options: IOption = {}): string {
  if (!date) return DEFAULT_PLACEHOLDER;

  const { isNoSignDate = false } = options;
  // Compatible with iOS
  let internalDate: stringNumber | Date = date;
  if (typeof internalDate === 'string') internalDate = internalDate.replace(/-/g, '/');

  if (isNoSignDate) internalDate = date.toString().replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3');

  try {
    return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, f => getDateDict(internalDate as string)[f]);
  } catch (e) {
    throw new Error('The date format is wrong!');
  }
}

export default dateFormat;