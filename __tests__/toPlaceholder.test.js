import toPlaceholder from '../lib/toPlaceholder';

test('toPlaceholder', () => {
  expect(toPlaceholder(0)).toBe('--');
  expect(toPlaceholder(1)).toBe(1);
  expect(toPlaceholder(NaN)).toBe('--');
})
