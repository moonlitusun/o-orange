import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }
}

const test = [
  ['time', 'high', 'low', 'open', 'close', 'volume'],
  ['09: 30', '1.05', '5', '5.01', '5', '1000'],
  ['09: 31', '2.06', '5', '5.01', '5', '1000'],
  ['09: 32', '3.05', '5', '5.01', '5', '1000'],
  ['09: 33', '4.05', '5', '5.01', '5', '1000'],
  ['09: 34', '5.05', '5', '5.01', '5', '1000'],
];

log(
);

console.log(O.parseKeyHeader(test))
const a = [1, 2, 3];

a.reduce((accumulator, currentValue, index) => {
  console.log(accumulator);

  return { ...accumulator, [index]: currentValue };
}, {})

console.log(a);
