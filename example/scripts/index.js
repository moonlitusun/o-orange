import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }

}

log(

);

function toUpperCase(str) {
  return str.toUpperCase();
}

function join(name) {
  return `hello, ${name}`;
}

console.log(toUpperCase(join('jacky')))

// 函数组合

const fn = O.compose([toUpperCase, join])
console.log(fn('sankou'))