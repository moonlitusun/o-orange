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

// src/toThousand.ts
var toThousand_exports = {};
__export(toThousand_exports, {
  default: () => toThousand_default
});
module.exports = __toCommonJS(toThousand_exports);
function toThousand(num, sign = ",") {
  const [integer, decimals] = num.toString().split(".");
  const thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${thousandInteger}.${decimals}` : thousandInteger;
}
var toThousand_default = toThousand;
