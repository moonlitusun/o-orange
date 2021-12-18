import toPercent from '../lib/toPercent';

test('toPercent', () => {
  expect(toPercent(0.6515, { multiply: 100, precision: 2 })).toBe('65.15%');
  expect(toPercent(65, 2)).toBe('65.00%');
  expect(toPercent(0.651525, { multiply: 100, precision: 3 })).toBe('65.153%');
  expect(toPercent(NaN)).toBe('--');
  expect(toPercent(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
})