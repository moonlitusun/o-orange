import get from '../dist/get';

test('get', () => {
  const obj = { a: { a1: { a2: [ { a3: 3 } ] }}, b: 6, c: 7 };
  
  expect(get(obj, ['a', 'a1', 'a2', '1', 'a3'], 666)).toBe(666);
  expect(get(obj, 'b')).toBe(6);
  expect(get(obj, ['a', 'a1', 'a2', '0', 'a3'], 666)).toBe(3);
})