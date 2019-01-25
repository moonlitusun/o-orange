import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }

}

let lastTime = Date.now();

O.interval(4000, () => {
  let i = 1;
  while (i++ < 1000000) {
    let c = Math.random(4) * 44;
  }
  const currTime = Date.now();
  // console.log('我' + (lastTime - currTime))
  lastTime = currTime;
})

let lastTime2 = Date.now();

setInterval(() => {
  let i = 1;
  while (i++ < 1000000) {
    let c = Math.random(4) * 44;
  }
  const currTime = Date.now();
  console.log('你' + (lastTime2 - currTime))
  lastTime2 = currTime;
}, 4000)

log(
);