import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }

}

class bird {
  name = 'eagle';

  getName() {
    console.log(this);
  }

  setName() {
    console.log(this.name)
  }
}

var Bird = new bird();

Bird.setName();

log(
);