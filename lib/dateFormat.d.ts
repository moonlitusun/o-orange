import { stringNumber } from './types/common/type';
/**
 *
 * Conversion time format
 *
 * @category Date
 * @since 0.0.1
 * @param {string | number} date The date to convert
 * @param {string} format yyyy, M, MM, dd, d, HH, H, mm, m, ss, s
 * @returns {string}
 * @example
 *
 * dateFormat(1548297785895, 'yy
 * yy-MM-dd HH:mm:ss')
 * // => 2019-01-24 10:43:05
 *
 */
declare function dateFormat(date: stringNumber | Date, format: string): string;
export default dateFormat;
