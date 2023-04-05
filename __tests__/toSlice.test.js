import { toSlice } from '../dist';

test('toSlice', () => {
  expect(toSlice(1.63456461, { precision: 2 })).toBe('1.63');
  expect(toSlice(1.63456461, { precision: 3 })).toBe('1.634');
  expect(toSlice(1, { precision: 2 })).toBe('1.00');
  expect(toSlice(-1.63456461, { precision: 2 })).toBe('-1.63');
  expect(toSlice(-1.63456461, { precision: 3 })).toBe('-1.634');
  expect(toSlice(-1, { precision: 2 })).toBe('-1.00');
  expect(toSlice(0, { precision: 2 })).toBe('0.00');
  expect(toSlice(1.43543, { precision: 0 })).toBe('1');
});
