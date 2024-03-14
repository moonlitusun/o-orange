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
 * @Examples
 *
 * dateFormat(1548297785895, 'yy
 * yy-MM-dd HH:mm:ss')
 * // => 2019-01-24 10:43:05
 *
 */
declare function dateFormat(date: Date | stringNumber, format?: string, options?: IOption): string;
export default dateFormat;
