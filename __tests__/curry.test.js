import curry from '../dist/curry';

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c) {
  return a * b * c;
}

test('curry', () => {
  const sumCurry = curry(sum)(1);
  const multiplyCurry = curry(multiply)(2);

  expect(sumCurry(4)(5)).toBe(10);
  expect(multiplyCurry(4)(3)).toBe(24);
})