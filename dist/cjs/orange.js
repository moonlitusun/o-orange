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

// src/orange.ts
var orange_exports = {};
__export(orange_exports, {
  RoundingMode: () => RoundingMode,
  default: () => orange_default
});
module.exports = __toCommonJS(orange_exports);
var RoundingMode = /* @__PURE__ */ ((RoundingMode2) => {
  RoundingMode2[RoundingMode2["roundDown"] = 0] = "roundDown";
  RoundingMode2[RoundingMode2["roundHalfUp"] = 1] = "roundHalfUp";
  RoundingMode2[RoundingMode2["roundHalfEven"] = 2] = "roundHalfEven";
  RoundingMode2[RoundingMode2["roundUp"] = 3] = "roundUp";
  return RoundingMode2;
})(RoundingMode || {});
var orange_default = new class Orange {
  constructor() {
    this.RM = 2 /* roundHalfEven */;
  }
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoundingMode
});
