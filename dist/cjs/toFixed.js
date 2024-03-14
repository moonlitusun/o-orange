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

// src/toFixed.ts
var toFixed_exports = {};
__export(toFixed_exports, {
  default: () => toFixed_default
});
module.exports = __toCommonJS(toFixed_exports);
var import_big = __toESM(require("big.js"));
var import_default = require("./constant/default");
var import_isTrue = __toESM(require("./isTrue"));
var import_orange = __toESM(require("./orange"));
function toFixed(num, option = {}) {
  const {
    placeholder = import_default.DEFAULT_PLACEHOLDER,
    precision = import_default.DEFAULT_PRECISION,
    ignoreIntegerPrecision = false,
    RM = import_orange.default.RM
  } = option;
  if (!(0, import_isTrue.default)(num))
    return placeholder;
  const pureNum = Number(num);
  if (isNaN(pureNum) || !isFinite(pureNum))
    return placeholder;
  if (ignoreIntegerPrecision && Number.parseFloat(pureNum.toString()) === Number.parseInt(pureNum.toString())) {
    return String(num);
  }
  return new import_big.default(Number(pureNum)).toFixed(precision, RM);
}
var toFixed_default = toFixed;
