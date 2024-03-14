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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RoundingMode: () => import_orange.RoundingMode,
  UNIT_LAN: () => import_toUnit.UNIT_LAN,
  csvArrayToObjects: () => import_csv_array.csvArrayToObjects,
  csvArrayWithoutKeysToObjects: () => import_csv_array.csvArrayWithoutKeysToObjects,
  dateFormat: () => import_dateFormat.default,
  dateRange: () => import_dateRange.dateRange,
  ensure: () => import_ensure.default,
  isTrue: () => import_isTrue.default,
  isUndefined: () => import_isUndefined.default,
  orange: () => import_orange.default,
  pagination: () => import_pagination.default,
  parseKeyHeader: () => import_parseKeyHeader.default,
  parseUrl: () => import_parseUrl.default,
  parseUrlByHash: () => import_parseUrl.parseUrlByHash,
  parseUrlBySearch: () => import_parseUrl.parseUrlBySearch,
  toFixed: () => import_toFixed.default,
  toPercent: () => import_toPercent.default,
  toPlaceholder: () => import_toPlaceholder.default,
  toPositiveSign: () => import_toPositiveSign.default,
  toSlice: () => import_toSlice.default,
  toThousand: () => import_toThousand.default,
  toUnit: () => import_toUnit.default
});
module.exports = __toCommonJS(src_exports);
var import_dateRange = require("./dateRange");
var import_dateFormat = __toESM(require("./dateFormat"));
var import_ensure = __toESM(require("./ensure"));
var import_isTrue = __toESM(require("./isTrue"));
var import_isUndefined = __toESM(require("./isUndefined"));
var import_pagination = __toESM(require("./pagination"));
var import_parseKeyHeader = __toESM(require("./parseKeyHeader"));
var import_parseUrl = __toESM(require("./parseUrl"));
var import_toFixed = __toESM(require("./toFixed"));
var import_toPositiveSign = __toESM(require("./toPositiveSign"));
var import_toPlaceholder = __toESM(require("./toPlaceholder"));
var import_toPercent = __toESM(require("./toPercent"));
var import_toSlice = __toESM(require("./toSlice"));
var import_toThousand = __toESM(require("./toThousand"));
var import_toUnit = __toESM(require("./toUnit"));
var import_csv_array = require("./csv-array");
var import_orange = __toESM(require("./orange"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoundingMode,
  UNIT_LAN,
  csvArrayToObjects,
  csvArrayWithoutKeysToObjects,
  dateFormat,
  dateRange,
  ensure,
  isTrue,
  isUndefined,
  orange,
  pagination,
  parseKeyHeader,
  parseUrl,
  parseUrlByHash,
  parseUrlBySearch,
  toFixed,
  toPercent,
  toPlaceholder,
  toPositiveSign,
  toSlice,
  toThousand,
  toUnit
});
