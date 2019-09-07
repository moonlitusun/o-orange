import toPercent from '../lib/toPercent';

test('toPercent', () => {
  expect(toPercent(0.6515)).toBe('65.15%');
  expect(toPercent(0.651525, 3)).toBe('65.153%');
  expect(toPercent(NaN)).toBe('---');
  expect(toPercent(NaN, 2, 'xxxx')).toBe('xxxx');
})