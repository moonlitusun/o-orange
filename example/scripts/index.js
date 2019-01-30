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

log(
);