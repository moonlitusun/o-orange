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

// src/ensure.ts
var ensure_exports = {};
__export(ensure_exports, {
  default: () => ensure_default
});
module.exports = __toCommonJS(ensure_exports);
var import_default = require("./constant/default");
var import_isUndefined = __toESM(require("./isUndefined"));
var import_isTrue = __toESM(require("./isTrue"));
function ensure(value, failureCallback, successCallback) {
  if (!(0, import_isTrue.default)(value)) {
    if (failureCallback === null || (0, import_isUndefined.default)(failureCallback))
      return import_default.DEFAULT_PLACEHOLDER;
    return typeof failureCallback === "function" ? failureCallback() : failureCallback;
  }
  if ((0, import_isUndefined.default)(successCallback))
    return value;
  return typeof successCallback === "function" ? successCallback() : successCallback;
}
var ensure_default = ensure;
