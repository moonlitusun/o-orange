import toPercent from '../lib/toPercent';

test('toPercent', () => {
  expect(toPercent(0.6515, 2, { multiply: 100 })).toBe('65.15%');
  expect(toPercent(65, 2)).toBe('65.00%');
  expect(toPercent(0.651525, 3, { multiply: 100 })).toBe('65.153%');
  expect(toPercent(NaN)).toBe('--');
  expect(toPercent(NaN, 2, { placeholder: 'xxxx' })).toBe('xxxx');
})