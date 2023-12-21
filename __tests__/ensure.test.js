const ensure = require('../dist/cjs/ensure').default;

test('ensure', () => {
  expect(ensure(1)).toEqual(1);
  expect(ensure()).toEqual('--');
  expect(ensure(undefined)).toEqual('--');
  expect(ensure(undefined, 'placeholder')).toEqual('placeholder');
  expect(ensure(0)).toEqual(0);
  expect(ensure(0, null, 'true')).toEqual('true');

  const num = 0;
  expect(ensure(!!num, null, num)).toEqual('--');
});
