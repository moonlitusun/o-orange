import { parseKeyHeader } from '../es';

test('is parseKeyHeader', () => {
  const arr = [
    ['name', 'age', 'sex'],
    ['jacky', '18', 'male'],
    ['jenny', '19', 'female'],
    ['staff', '201', 'secret'],
  ]
  
  expect(parseKeyHeader(arr)).toEqual([
    {
      name: 'jacky',
      age: '18',
      sex: 'male',
    },
    {
      name: 'jenny',
      age: '19',
      sex: 'female',
    },
    {
      name: 'staff',
      age: '201',
      sex: 'secret',
    },
  ]);
})
