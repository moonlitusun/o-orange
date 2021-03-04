import toSlice from '../lib/toSlice';

test('toSlice', () => {
  expect(toSlice(1.63456461, 2)).toBe('1.63');
  expect(toSlice(1.63456461, 3)).toBe('1.634');
  expect(toSlice(1, 2)).toBe('1.00');
  expect(toSlice(-1.63456461, 2)).toBe('-1.63');
  expect(toSlice(-1.63456461, 3)).toBe('-1.634');
  expect(toSlice(-1, 2)).toBe('-1.00');
  expect(toSlice(0, 2)).toBe('0.00');
  expect(toSlice(1.43543, 0)).toBe('1');
});
