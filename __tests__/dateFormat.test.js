import dateFormat from '../lib/dateFormat';

test('dateFormat', () => {
  expect(dateFormat(1548297785895, 'yyyy-MM-dd HH:mm:ss')).toBe('2019-01-24 10:43:05');
})