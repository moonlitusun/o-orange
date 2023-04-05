import { toPlaceholder } from '../dist';

test('toPlaceholder', () => {
  expect(toPlaceholder(0)).toBe(0);
  expect(toPlaceholder(1)).toBe(1);
  expect(toPlaceholder(NaN)).toBe('--');
})
