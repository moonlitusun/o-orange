import { stringNumber } from './helper/types';

/**
  * Conversion time format
  *
  * @category Date
  * @since 0.0.1
  * @param {string | number} date The date to convert
  * @param {string} format [yyyy, M, MM, dd, d, HH, H, mm, m, ss, s]
  * @returns {string}
  * @example
  * 
  * dateFormat(1548297785895, 'yyyy-MM-dd HH:mm:ss')
  * // => 2019-01-24 10:43:05
  * 
  */
function dateFormat(date: stringNumber | Date, format: string): string {
  if (!date) throw new Error('Invalid Date');
  if (!format) throw new Error('Please enter the date format you want to convert');

  let _data = date;
  if (typeof _data === 'string') _data = _data.replace(/-/g, '/');

  const parseDate = new Date(_data);
  const dict = {
    yyyy: parseDate.getFullYear(),
    M: parseDate.getMonth() + 1,
    d: parseDate.getDate(),
    H: parseDate.getHours(),
    m: parseDate.getMinutes(),
    s: parseDate.getSeconds(),
    MM: (`${parseDate.getMonth() + 101}`).substr(1),
    dd: (`${parseDate.getDate() + 100}`).substr(1),
    HH: (`${parseDate.getHours() + 100}`).substr(1),
    mm: (`${parseDate.getMinutes() + 100}`).substr(1),
    ss: (`${parseDate.getSeconds() + 100}`).substr(1),
  };

  try {
    return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, f => dict[f]);
  } catch (e) {
    throw new Error('The date format is wrong!')
  }
}

export default dateFormat;
