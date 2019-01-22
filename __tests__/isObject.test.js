import isObject from '../dist/isObject';

test('is object', () => {
  const
    object = {a: 1, b: 2},
    array = [0, 1, 2, 3];
  
  expect(isObject(object)).toBeTruthy();
  expect(isObject(array)).toBeFalsy();
})