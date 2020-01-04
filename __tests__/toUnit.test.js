import toUnit from '../lib/toUnit';

test('toThousand', () => {
  expect(toUnit(1100)).toBe('1.10K');
  expect(toUnit(12200, 2, { type: 2 })).toBe('1.22万');
})