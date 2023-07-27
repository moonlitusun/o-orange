const isTrue = require('../dist/cjs/isTrue').default;

test('is false not zero', () => {
  expect(isTrue(0)).toBeTruthy();
  expect(isTrue(1)).toBeTruthy();
  expect(isTrue(null)).toBeFalsy();
  expect(isTrue(undefined)).toBeFalsy();
})