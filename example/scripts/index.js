import _array, { shuffle } from '../../src/_array'
import _date, { queryTimezoneTime } from '../../src/_date';
import _location, { normalizeSearch } from '../../src/_location';
import _number, { pad, convertToThousand, convertToPercent, sss } from '../../src/_number';
import _timerd, { fixedTimerd } from '../../src/_timerd';

/**
 * _array
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const parseArr = _array.pagination(arr, 2, -1);
// const parseArr = shuffle(arr);

// console.log(parseArr);
// console.log(_array);
// console.log(shuffle);

/**
 * _date
 */
// console.log(queryTimezoneTime(-2, '2018-10-20'));

 /**
  * _location
  */
// console.log(normalizeSearch('modelTypeCode', 'hash'));


/**
 * timerd
 */
// fixedTimerd(2000, () => {
//   console.log(23);
// })
 
/**
 * _number
 */
console.log(pad('sdffs'));
console.log(convertToThousand('23424'))
console.log(convertToPercent('dfsdfsd', 3));
console.log(sss);

