import isNumber from '../lib/isNumber';

test('is number', () => {
  const
    num = 0,
    str = '0';
  
  expect(isNumber(num)).toBeTruthy();
  expect(isNumber(str)).toBeFalsy();
})