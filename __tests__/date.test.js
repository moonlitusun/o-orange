const { Lang, orange } = require('../dist/cjs');
const { DateFormat, formatDate } = require('../dist/cjs/date');

const originalLanguage = orange.lang;

afterEach(() => {
  orange.lang = originalLanguage;
});

test('uses the current orange language unless an explicit language is provided', () => {
  orange.lang = Lang.ZH_TW;
  expect(formatDate('2026-11-14', DateFormat.DATE)).toBe('2026/11/14');
  expect(formatDate('2026-11-14', DateFormat.DATE, Lang.EN_US)).toBe('Nov 14, 2026');
  orange.lang = Lang.EN_US;
  expect(formatDate('2026-11-14', DateFormat.DATE)).toBe('Nov 14, 2026');
});

test('formats dates, timestamps, and Day.js values', () => {
  const timestamp = new Date(2026, 10, 14, 15, 30).getTime();
  const formatted = 'Nov 14 15:30';
  const dayjs = require('dayjs');

  for (const value of [new Date(timestamp), timestamp, timestamp / 1000, dayjs(timestamp)]) {
    expect(formatDate(value, DateFormat.MONTH_DAY_TIME_MIN, Lang.EN_US)).toBe(formatted);
  }

  expect(formatDate(20261114, DateFormat.DATE_HYPHEN, Lang.ZH_TW)).toBe('2026-11-14');
  expect(formatDate('20261114', 'DD.MM.YYYY', Lang.ZH_CN)).toBe('14.11.2026');
});

test('returns the placeholder for invalid dates', () => {
  expect(formatDate('2026/02/30', DateFormat.DATE)).toBe('--');
  expect(formatDate(20260230, DateFormat.DATE, Lang.EN_US, 'N/A')).toBe('N/A');
});
