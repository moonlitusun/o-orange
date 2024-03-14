// src/toSlice.ts
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from "./constant/default";
import Big from "big.js";
import toFixed from "./toFixed";
import isTrue from "./isTrue";
import { RoundingMode } from "./orange";
function toSlice(num, option = {}) {
  const { placeholder = DEFAULT_PLACEHOLDER, precision = DEFAULT_PRECISION, ignoreIntegerPrecision = false } = option;
  if (!isTrue(num))
    return placeholder;
  const pureNum = Number(num);
  if (isNaN(pureNum))
    return placeholder;
  if (ignoreIntegerPrecision && Number.parseFloat(pureNum.toString()) === Number.parseInt(pureNum.toString())) {
    return pureNum.toString();
  }
  const multiple = Math.pow(10, precision);
  return toFixed(Big(pureNum).mul(multiple).div(multiple), { precision, RM: RoundingMode.roundDown });
}
var toSlice_default = toSlice;
export {
  toSlice_default as default
};
