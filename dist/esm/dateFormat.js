// src/dateFormat.ts
import { DEFAULT_PLACEHOLDER } from "./constant/default";
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
    return DEFAULT_PLACEHOLDER;
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
export {
  dateFormat_default as default
};
