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

// src/constant/default.ts
var default_exports = {};
__export(default_exports, {
  DEFAULT_PLACEHOLDER: () => DEFAULT_PLACEHOLDER,
  DEFAULT_PRECISION: () => DEFAULT_PRECISION
});
module.exports = __toCommonJS(default_exports);
var DEFAULT_PRECISION = 2;
var DEFAULT_PLACEHOLDER = "--";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_PLACEHOLDER,
  DEFAULT_PRECISION
});
