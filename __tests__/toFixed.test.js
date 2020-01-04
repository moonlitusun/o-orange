import toFixed from '../lib/toFixed';

test('toFixed', () => {
  expect(toFixed(NaN, 2, { placeholder: 'xxxx' })).toBe('xxxx');
  expect(toFixed('none', 2)).toBe('--');
  expect(toFixed(1.2345, 2)).toBe('1.23');
})