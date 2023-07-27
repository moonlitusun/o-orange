const pagination = require('../dist/cjs/pagination').default;

test('is pagination', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  expect(pagination(arr, 2, 8)).toEqual([9, 10]);
  expect(pagination(arr, 3, 3)).toEqual([7, 8, 9]);
})
