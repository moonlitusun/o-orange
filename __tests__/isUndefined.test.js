import { isUndefined } from '../es';

test('is undefined', () => {
  const
    _undefined = undefined,
    array = [0, 1, 2, 3],
    object = { prop: true };
  
  expect(isUndefined(_undefined)).toBeTruthy();
  expect(isUndefined(array)).toBeFalsy();
  expect(isUndefined(object.prop2)).toBeTruthy();
  expect(isUndefined(object.prop)).toBeFalsy();
})