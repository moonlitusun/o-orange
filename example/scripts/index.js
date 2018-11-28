import orange from '../../src/index';
import _array, { shuffle } from '../../src/_array'
import _date, { queryTimezoneTime } from '../../src/_date';
import _location, { normalizeSearch } from '../../src/_location';
import _number, { pad, convertToThousand, convertToPercent, convertToFixed } from '../../src/_number';
import _time, { fixedTimerd, dateFormat } from '../../src/_time';
import _type, { isArray, isNumber, isUndefined, isObject } from '../../src/_type';

console.log(orange);

document.writeln(JSON.stringify(orange));

/**
 * _array
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const parseArr = _array.pagination(arr, -1, 5);

// const arr = [1, 2, 3, 4, 5];
// const parseArr = shuffle(arr);

// console.log(parseArr);

/**
 * _date
 */
// console.log(queryTimezoneTime(15, '2018-10-20 5:30:20'));
// console.log(queryTimezoneTime(-8, '2018-10-20 5:30:20'));

 /**
  * _location
  */
// console.log(normalizeSearch('modelTypeCode', 'hash'));


/**
 * _number
 */
// console.log(pad('1'));
// console.log(pad(1, 3));

// console.log(convertToThousand('16000'))
// console.log(convertToThousand('16000.1021'))
// console.log(convertToThousand('16000', ' '))

// console.log(convertToPercent(0.3));
// console.log(convertToPercent(0.3235, 1));
// console.log(convertToPercent(0.32, 3));
// console.log(convertToPercent('notNumber'));
// console.log(convertToPercent(NaN));
// console.log(convertToPercent('notNumber', 2, '0000'));


// console.log(convertToFixed(3));
// console.log(convertToFixed(3.15511, 1))
// console.log(convertToFixed(3.2, 3))
// console.log(convertToFixed('notNumber'))

/**
 * time
 */
// fixedTimerd(2000, () => console.log(23))

// console.log(dateFormat(1543375099132, 'yyyy-MM-dd HH:mm:ss'));
// console.log(dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss'));
// console.log(dateFormat('2018-5-12', 'yyyy-MM-dd HH:mm:ss'));
// console.log(dateFormat(1543375099132, 'HH:mm:ss'));
// console.log(dateFormat(new Date(), 'H:m:s'));

/**
 * _type
 */

// console.log(isArray(3));
// console.log(isArray([]));

// console.log(isObject(3));
// console.log(isObject({}));

// console.log(isUndefined(3));
// console.log(isUndefined({}.property));

// console.log(isNumber('3'));
// console.log(isNumber(3));