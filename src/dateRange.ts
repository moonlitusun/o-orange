import dateFormat from './dateFormat';
import { stringNumber } from './types/custom-types';

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
 * @param {The second argument of the dateFormat function} options.dateType output time format
 * @param {string} options.rangeType Time interval
 * @param {number} options.rangeMultiple Time interval multiple
 * @param {bool} options.fixedEndTime No matter how keep endTime exists
 * @returns {Array}
 *
 */
export default function dateRange(
  beginTime: stringNumber,
  endTime: stringNumber,
  options: IOptions = {},
): string[] {
  if (!beginTime || !endTime) throw new Error('You must specify the start ant end time');

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

  const nextTimeInstance: Date = new Date(beginTimeInstance);

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
