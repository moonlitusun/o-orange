import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }
}


log(
  
);

console.log(O.dateRange('2010-09-01 11:30', '2010-09-01 12:00', { rangeType: 'minute', rangeMultiple: 3, fixedEndTime: true }))
