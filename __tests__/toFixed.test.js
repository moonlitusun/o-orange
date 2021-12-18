import toFixed from '../lib/toFixed';

test('toFixed', () => {
  expect(toFixed(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
  expect(toFixed('none')).toBe('--');
  expect(toFixed(1.2345, { precision: 3 })).toBe('1.234');
})