import dateFormat from '../lib/dateFormat';

test('is Right', () => {
  const date = 1589947200000;
  
  expect(dateFormat()).toEqual('--');
  expect(dateFormat(date, 'yyyy-MM-dd')).toEqual('2020-05-20');
  expect(dateFormat(20211221, 'yyyy-MM-dd', { isNoSignDate: true })).toEqual('2021-12-21');
})
