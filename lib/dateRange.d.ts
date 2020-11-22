import { stringNumber } from './types/common/type';
import { IOptions } from './types/dateRange';
/**
 *
 * Generate an ordered time interval array
 *
 * @category Date
 * @since 2.0.4
 * @param {string | number | Date} beginTime beginTime(Can be converted by new Date())
 * @param {string | number | Date} endTime endTime(Can be converted by new Date())
 * @param {Object} options
 * @param {The second argument of the dateFormat function} [options.dateType = 'yyyy-MM-dd HH:mm:ss'] output time format
 * @param {string} [options.rangeType = 'minute'] Time interval
 * @param {number} [options.rangeMultiple = 1] Time interval multiple
 * @param {bool} [options.fixedEndTime = false] No matter how keep endTime exists
 * @returns {Array}
 *
 */
export default function dateRange(beginTime: stringNumber, endTime: stringNumber, options?: IOptions): string[];
