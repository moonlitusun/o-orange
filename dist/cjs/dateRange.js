var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/dateRange.ts
var dateRange_exports = {};
__export(dateRange_exports, {
  RANGE_TYPE_LIST: () => RANGE_TYPE_LIST,
  dateRange: () => dateRange
});
module.exports = __toCommonJS(dateRange_exports);
var import_dateFormat = __toESM(require("./dateFormat"));
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
    result.push((0, import_dateFormat.default)(nextTimeInstance, dateType));
    nextTimeInstance[set](nextTimeInstance[get]() + unit * rangeMultiple);
  }
  if (fixedEndTime && result[result.length - 1] !== (0, import_dateFormat.default)(endTimeInstance, dateType)) {
    result.push((0, import_dateFormat.default)(endTimeInstance, dateType));
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RANGE_TYPE_LIST,
  dateRange
});
