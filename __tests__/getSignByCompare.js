const getSignByComparison = require('../dist/cjs/getSignByComparison').default;

test('getSignByComparison', () => {
  expect(getSignByComparison(1)).toEqual('price-raise');
  expect(getSignByComparison(0)).toEqual(undefined);
  expect(getSignByComparison()).toEqual(undefined);
  expect(getSignByComparison(-1)).toEqual('price-decline');

  expect(getSignByComparison(1, { equalSign: 'equal', balance: 1 })).toEqual('equal');
  expect(getSignByComparison(1, { equalSign: 'equal', raiseSign: 'raise', balance: -1 })).toEqual('raise');
  expect(getSignByComparison(1, { equalSign: 'equal', declineSign: 'decline', balance: 3 })).toEqual('decline');
});
