// src/toPercent.ts
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from "./constant/default";
import toFixed from "./toFixed";
function toPercent(num, option = {}) {
  const { placeholder = DEFAULT_PLACEHOLDER, multiply = 1, precision = DEFAULT_PRECISION } = option;
  const pureNum = Number(num);
  if (isNaN(pureNum))
    return placeholder;
  return `${toFixed(multiply * num, { precision })}%`;
}
var toPercent_default = toPercent;
export {
  toPercent_default as default
};
