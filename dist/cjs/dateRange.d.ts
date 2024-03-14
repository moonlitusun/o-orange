import { stringNumber } from './types/common/type';
interface IOptions {
    rangeType?: string;
    dateType?: string;
    rangeMultiple?: number;
    fixedEndTime?: false;
}
interface IRangeTypeListChildrenObject {
    get: string;
    set: string;
    unit: number;
}
interface IRangeTypeList {
    millsecond: IRangeTypeListChildrenObject;
    second: IRangeTypeListChildrenObject;
    minute: IRangeTypeListChildrenObject;
    hour: IRangeTypeListChildrenObject;
    day: IRangeTypeListChildrenObject;
    week: IRangeTypeListChildrenObject;
    month: IRangeTypeListChildrenObject;
    year: IRangeTypeListChildrenObject;
}
export declare const RANGE_TYPE_LIST: IRangeTypeList;
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
export declare function dateRange(beginTime: stringNumber | Date, endTime: stringNumber | Date, options?: IOptions): string[];
export {};
