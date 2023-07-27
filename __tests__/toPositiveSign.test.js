const toPositiveSign = require('../dist/cjs/toPositiveSign').default;

test('toPositiveSign', () => {
  expect(toPositiveSign(1)).toBe('+1');
  expect(toPositiveSign(200)).toBe('+200');
  expect(toPositiveSign(-200)).toBe('-200');
  expect(toPositiveSign(0)).toBe('0');
  expect(toPositiveSign(0, { canEqual: true })).toBe('+0');
  expect(toPositiveSign('--')).toBe('--');
})