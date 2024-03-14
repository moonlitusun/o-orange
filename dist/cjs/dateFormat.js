var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/dateFormat.ts
var dateFormat_exports = {};
__export(dateFormat_exports, {
  default: () => dateFormat_default
});
module.exports = __toCommonJS(dateFormat_exports);
var import_default = require("./constant/default");
function getDateDict(date) {
  const currentDate = new Date(date);
  return {
    yyyy: currentDate.getFullYear(),
    M: currentDate.getMonth() + 1,
    d: currentDate.getDate(),
    H: currentDate.getHours(),
    m: currentDate.getMinutes(),
    s: currentDate.getSeconds(),
    MM: `${currentDate.getMonth() + 101}`.substr(1),
    dd: `${currentDate.getDate() + 100}`.substr(1),
    HH: `${currentDate.getHours() + 100}`.substr(1),
    mm: `${currentDate.getMinutes() + 100}`.substr(1),
    ss: `${currentDate.getSeconds() + 100}`.substr(1)
  };
}
function dateFormat(date, format = "yyyy-MM-dd HH:mm:ss", options = {}) {
  if (!date)
    return import_default.DEFAULT_PLACEHOLDER;
  const { isNoSignDate = false } = options;
  let internalDate = date;
  if (typeof internalDate === "string")
    internalDate = internalDate.replace(/-/g, "/");
  if (isNoSignDate)
    internalDate = date.toString().replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
  try {
    return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, (f) => getDateDict(internalDate)[f]);
  } catch (e) {
    throw new Error("The date format is wrong!");
  }
}
var dateFormat_default = dateFormat;
