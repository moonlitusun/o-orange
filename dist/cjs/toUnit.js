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

// src/toUnit.ts
var toUnit_exports = {};
__export(toUnit_exports, {
  UNIT_LAN: () => UNIT_LAN,
  default: () => toUnit_default
});
module.exports = __toCommonJS(toUnit_exports);
var import_toFixed = __toESM(require("./toFixed"));
var import_default = require("./constant/default");
var UNIT_LAN = /* @__PURE__ */ ((UNIT_LAN2) => {
  UNIT_LAN2["ZH_CN"] = "zh-CN";
  UNIT_LAN2["ZH_TW"] = "zh-TW";
  UNIT_LAN2["EN_US"] = "en-US";
  return UNIT_LAN2;
})(UNIT_LAN || {});
var unitDict = {
  ["en-US" /* EN_US */]: [
    { value: Math.pow(10, 12), label: "T" },
    { value: Math.pow(10, 9), label: "B" },
    { value: Math.pow(10, 6), label: "M" },
    { value: Math.pow(10, 3), label: "K" }
  ],
  ["zh-CN" /* ZH_CN */]: [
    { value: Math.pow(10, 12), label: "万亿" },
    { value: Math.pow(10, 8), label: "亿" },
    { value: Math.pow(10, 4), label: "万" }
  ],
  ["zh-TW" /* ZH_TW */]: [
    { value: Math.pow(10, 12), label: "萬億" },
    { value: Math.pow(10, 8), label: "億" },
    { value: Math.pow(10, 4), label: "萬" }
  ]
};
function toUnit(num, options = {}) {
  const {
    lanType = "en-US" /* EN_US */,
    placeholder = import_default.DEFAULT_PLACEHOLDER,
    precision = import_default.DEFAULT_PRECISION,
    ignoreIntegerPrecision = true
  } = options;
  const pureNum = Number(num);
  if (isNaN(pureNum))
    return placeholder;
  const unit = unitDict[lanType] || unitDict["en-US" /* EN_US */];
  const unitLen = unit.length;
  const numAbs = Math.abs(+num);
  let result = "";
  const toFixedParams = {
    placeholder,
    precision,
    ignoreIntegerPrecision
  };
  if (numAbs < unit[unitLen - 1].value)
    return (0, import_toFixed.default)(num, toFixedParams);
  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];
    if (numAbs >= value) {
      result = `${pureNum < 0 ? "-" : ""}${(0, import_toFixed.default)(
        numAbs / value,
        toFixedParams
      )}${label}`;
      break;
    }
  }
  return result;
}
var toUnit_default = toUnit;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UNIT_LAN
});
