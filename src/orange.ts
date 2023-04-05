// see https://mikemcl.github.io/big.js/#rm
export enum RoundingMode {
  roundDown,
  roundHalfUp,
  roundHalfEven,
  roundUp
}

export default new class Orange {
  RM = RoundingMode.roundHalfEven
}();