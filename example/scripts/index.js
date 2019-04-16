import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }
}

const move = O.debounce((time) => {
  log(time);
  move.cancel();
}, 1000)

window.addEventListener('mousemove', () => move(+new Date))

// log(
// );

var obj = { a: { a1: { a2: [ { a3: 3 } ] }}, b: 6, c: 7 };

log(
  // O.get(obj, ['a', 'a1', 'a2', '1', 'a3'], 666),
  // O.get(obj, 'b'),
  // O.toFixed('4')
);