import dateFormat from './dateFormat.js';

var RANGE_TYPE_LIST = {
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
function dateRange(beginTime, endTime, options) {
    if (options === void 0) { options = {}; }
    if (!beginTime || !endTime)
        throw new Error('You must specify the start and end time');
    var _a = options.dateType, dateType = _a === void 0 ? 'yyyy-MM-dd HH:mm:ss' : _a, _b = options.rangeType, rangeType = _b === void 0 ? 'minute' : _b, _c = options.rangeMultiple, rangeMultiple = _c === void 0 ? 1 : _c, _d = options.fixedEndTime, fixedEndTime = _d === void 0 ? false : _d;
    var result = [];
    var beginTimeInstance = new Date(beginTime);
    var endTimeInstance = new Date(endTime);
    var endTimestamp = endTimeInstance.getTime();
    var _e = RANGE_TYPE_LIST[rangeType], get = _e.get, set = _e.set, unit = _e.unit;
    var nextTimeInstance = beginTimeInstance;
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

export default dateRange;
