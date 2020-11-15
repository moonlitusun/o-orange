import isFalseNotZero from '../lib/isFalseNotZero';

test('is false not zero', () => {
  expect(isFalseNotZero(0)).toBeFalsy();
  expect(isFalseNotZero(1)).toBeFalsy();
  expect(isFalseNotZero(null)).toBeTruthy();
  expect(isFalseNotZero(undefined)).toBeTruthy();
})