import isArray from '../lib/isArray';

test('is array', () => {
  const
    object = {a: 1, b: 2},
    array = [0, 1, 2, 3],
    num = 1;
  
  expect(isArray(array)).toBeTruthy();
  expect(isArray(object)).toBeFalsy();
  expect(isArray(num)).toBeFalsy();
})