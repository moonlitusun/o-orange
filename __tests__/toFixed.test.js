const { default: toFixed } = require('../dist/cjs/toFixed');
const { default: orange, RoundingMode } = require('../dist/cjs/orange');

test('toFixed', () => {
  expect(toFixed(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
  expect(toFixed('none')).toBe('--');
  expect(toFixed('', { precision: 3 })).toBe('--');
  expect(toFixed(0, { precision: 2 })).toBe('0.00');
  expect(toFixed(1.2345, { precision: 3 })).toBe('1.234');
  expect(toFixed(1, { ignoreIntegerPrecision: true, precision: 3 })).toBe("1");

  expect(toFixed(1.55, { precision: 1, RM: RoundingMode.roundDown })).toBe('1.5');
  expect(toFixed(1.52, { precision: 1, RM: RoundingMode.roundUp })).toBe('1.6');
  expect(toFixed(1.55, { precision: 1, RM: RoundingMode.roundHalfEven })).toBe('1.6');
  expect(toFixed(1.25, { precision: 1, RM: RoundingMode.roundHalfEven })).toBe('1.2');

  expect(toFixed(1.35, { precision: 1 })).toBe('1.4');
  orange.RM = RoundingMode.roundUp;
  expect(toFixed(1.25, { precision: 1 })).toBe('1.3');
})