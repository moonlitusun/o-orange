import { isTrue } from '../dist';

test('is false not zero', () => {
  expect(isTrue(0)).toBeTruthy();
  expect(isTrue(1)).toBeTruthy();
  expect(isTrue(null)).toBeFalsy();
  expect(isTrue(undefined)).toBeFalsy();
})