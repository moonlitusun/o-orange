import dateFormat from './dateFormat';

import { stringNumber } from './types/common/type';
import { IOptions, IRangeTypeList } from './types/dateRange';

const RANGE_TYPE_LIST: IRangeTypeList = {
  millsecond: {
    get: 'getMillseconds',
    set: 'setMillseconds',
    unit: 1,
  },
  second: {
    get: 'getSeconds',
    set: 'setSeconds',
    unit: 1,
  },
  minute: {
    get: 'getMinutes',
    set: 'setMinutes',
    unit: 1,
  },
  hour: {
    get: 'getHours',
    set: 'setHours',
    unit: 1,
  },
  day: {
    get: 'getDate',
    set: 'setDate',
    unit: 1,
  },
  week: {
    get: 'getDate',
    set: 'setDate',
    unit: 7,
  },
  month: {
    get: 'getMonth',
    set: 'setMonth',
    unit: 1,
  },
  year: {
    get: 'getFullYear',
    set: 'setFullYear',
    unit: 1,
  },
};

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
export default function dateRange(
  beginTime: stringNumber,
  endTime: stringNumber,
  options: IOptions = {},
): string[] {
  if (!beginTime || !endTime) throw new Error('You must specify the start and end time');

  const {
    dateType = 'yyyy-MM-dd HH:mm:ss',
    rangeType = 'minute',
    rangeMultiple = 1,
    fixedEndTime = false,
  } = options;
  const result = [];

  const beginTimeInstance: Date = new Date(beginTime);
  const endTimeInstance: Date = new Date(endTime);
  const endTimestamp: number = endTimeInstance.getTime();
  const { get, set, unit } = RANGE_TYPE_LIST[rangeType];

  const nextTimeInstance: Date = beginTimeInstance;

  while (nextTimeInstance.getTime() <= endTimestamp) {
    result.push(dateFormat(nextTimeInstance, dateType));

    nextTimeInstance[set](nextTimeInstance[get]() + (unit * rangeMultiple));
  }

  // check endTime
  if (fixedEndTime && result[result.length - 1] !== dateFormat(endTimeInstance, dateType)) {
    result.push(dateFormat(endTimeInstance, dateType));
  }

  return result;
}
