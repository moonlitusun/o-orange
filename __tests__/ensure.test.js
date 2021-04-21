import ensure from '../lib/ensure';
import isTrue from '../lib/isTrue';

test('ensure', () => {
  expect(ensure(1)).toEqual(1);
  expect(ensure()).toEqual('--');
  expect(ensure(0, 'hh')).toEqual('hh');
  expect(ensure(0)).toEqual('--');
  expect(ensure(isTrue(0), null, 'test')).toEqual('test');
})
