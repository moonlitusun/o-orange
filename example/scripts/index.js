import internal from './internal';
import O from '../../src/index';

function log(...rest) {
  for (let v of rest) {
    console.log(`${v}\n`);
  }
}


log(
  // O.toUnit(10083342800, 2, { type: 3 }),
  O.toPositiveSign(15),
  O.toPositiveSign(-15),
  O.toPositiveSign('15'),
  O.toPositiveSign(0, true),
);

// console.log(O.dateRange('2010-09-01 11:30', '2010-09-01 12:00', { rangeType: 'minute', rangeMultiple: 3, fixedEndTime: true }))
