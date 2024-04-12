// see https://mikemcl.github.io/big.js/#rm
export enum Lang {
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',
  EN_US = 'en-US'
}

export enum RoundingMode {
  roundDown,
  roundHalfUp,
  roundHalfEven,
  roundUp
}

export default new class Orange {
  RM = RoundingMode.roundHalfEven;
  lang = Lang.EN_US;
  precision = 2;
  placeholder = '--';
  ignoreIntegerPrecision = true;
}();