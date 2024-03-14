// src/orange.ts
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
export {
  RoundingMode,
  orange_default as default
};
