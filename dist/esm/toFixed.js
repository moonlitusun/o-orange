// src/toFixed.ts
import Big from "big.js";
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from "./constant/default";
import isTrue from "./isTrue";
import Orange from "./orange";
function toFixed(num, option = {}) {
  const {
    placeholder = DEFAULT_PLACEHOLDER,
    precision = DEFAULT_PRECISION,
    ignoreIntegerPrecision = false,
    RM = Orange.RM
  } = option;
  if (!isTrue(num))
    return placeholder;
  const pureNum = Number(num);
  if (isNaN(pureNum) || !isFinite(pureNum))
    return placeholder;
  if (ignoreIntegerPrecision && Number.parseFloat(pureNum.toString()) === Number.parseInt(pureNum.toString())) {
    return String(num);
  }
  return new Big(Number(pureNum)).toFixed(precision, RM);
}
var toFixed_default = toFixed;
export {
  toFixed_default as default
};
