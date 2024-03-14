// src/dateRange.ts
import dateFormat from "./dateFormat";
var RANGE_TYPE_LIST = {
  millsecond: {
    get: "getMillseconds",
    set: "setMillseconds",
    unit: 1
  },
  second: {
    get: "getSeconds",
    set: "setSeconds",
    unit: 1
  },
  minute: {
    get: "getMinutes",
    set: "setMinutes",
    unit: 1
  },
  hour: {
    get: "getHours",
    set: "setHours",
    unit: 1
  },
  day: {
    get: "getDate",
    set: "setDate",
    unit: 1
  },
  week: {
    get: "getDate",
    set: "setDate",
    unit: 7
  },
  month: {
    get: "getMonth",
    set: "setMonth",
    unit: 1
  },
  year: {
    get: "getFullYear",
    set: "setFullYear",
    unit: 1
  }
};
function dateRange(beginTime, endTime, options = {}) {
  if (!beginTime || !endTime)
    throw new Error("You must specify the start and end time");
  const {
    dateType = "yyyy-MM-dd HH:mm:ss",
    rangeType = "minute",
    rangeMultiple = 1,
    fixedEndTime = false
  } = options;
  const result = [];
  const beginTimeInstance = new Date(beginTime);
  const endTimeInstance = new Date(endTime);
  const endTimestamp = endTimeInstance.getTime();
  const { get, set, unit } = RANGE_TYPE_LIST[rangeType];
  const nextTimeInstance = beginTimeInstance;
  while (nextTimeInstance.getTime() <= endTimestamp) {
    result.push(dateFormat(nextTimeInstance, dateType));
    nextTimeInstance[set](nextTimeInstance[get]() + unit * rangeMultiple);
  }
  if (fixedEndTime && result[result.length - 1] !== dateFormat(endTimeInstance, dateType)) {
    result.push(dateFormat(endTimeInstance, dateType));
  }
  return result;
}
export {
  RANGE_TYPE_LIST,
  dateRange
};
