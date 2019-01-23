import pagination from '../dist/pagination';

test('is undefined', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  expect(pagination(arr, 2, 8)).toEqual([9, 10]);
  expect(pagination(arr, 3, 3)).toEqual([7, 8, 9]);
})
