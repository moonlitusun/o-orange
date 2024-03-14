// src/toUnit.ts
import toFixed from "./toFixed";
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from "./constant/default";
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
    placeholder = DEFAULT_PLACEHOLDER,
    precision = DEFAULT_PRECISION,
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
    return toFixed(num, toFixedParams);
  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];
    if (numAbs >= value) {
      result = `${pureNum < 0 ? "-" : ""}${toFixed(
        numAbs / value,
        toFixedParams
      )}${label}`;
      break;
    }
  }
  return result;
}
var toUnit_default = toUnit;
export {
  UNIT_LAN,
  toUnit_default as default
};
