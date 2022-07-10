import { toFixed } from '../es';

test('toFixed', () => {
  expect(toFixed(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
  expect(toFixed('none')).toBe('--');
  expect(toFixed('', { precision: 3 })).toBe('--');
  expect(toFixed(0, { precision: 2 })).toBe('0.00');
  expect(toFixed(1.2345, { precision: 3 })).toBe('1.234');
  expect(toFixed(1, { ignoreIntegerPrecision: true, precision: 3 })).toBe(1);
})