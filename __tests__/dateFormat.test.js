import dateFormat from '../lib/dateFormat';

test('is Right', () => {
  const date = 1589947200000;
  
  expect(dateFormat()).toEqual('--');
  expect(dateFormat(date)).toEqual('2020-05-20 12:00:00');
  expect(dateFormat(date, 'yyyy-MM-dd')).toEqual('2020-05-20');
})
