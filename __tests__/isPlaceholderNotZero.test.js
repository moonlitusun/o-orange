import toPlaceholderNotZero from '../lib/toPlaceholderNotZero';

test('toPlaceholderNotZero', () => {
  expect(toPlaceholderNotZero(0)).toBe(0);
  expect(toPlaceholderNotZero(1)).toBe(1);
  expect(toPlaceholderNotZero(NaN)).toBe('--');
})
