import _array, { shuffle } from '../../src/_array'
import _date, { queryTimezoneTime } from '../../src/_date';
import _location, { normalizeSearch } from '../../src/_location';
import _number, { pad, convertToThousand, convertToPercent } from '../../src/_number';
import _time, { fixedTimerd, dateFormat } from '../../src/_time';
import { debounce } from '../../src/_decorator';

/**
 * _array
 */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const parseArr = _array.pagination(arr, -1, 5);

const arr = [1, 2, 3, 4, 5];
const parseArr = shuffle(arr);

console.log(parseArr);
/**
 * _date
 */
// console.log(queryTimezoneTime(-2, '2018-10-20'));

 /**
  * _location
  */
// console.log(normalizeSearch('modelTypeCode', 'hash'));


/**
 * time
 */
// fixedTimerd(2000, () => {
//   console.log(23);
// })

// console.log(dateFormat('2015-5-23', 'yyyy-MM-dd HH-mm-ss'));
 
/**
 * _number
 */
// console.log(pad('sdffs'));
// console.log(convertToThousand('23424'))
// console.log(convertToPercent('dfsdfsd', 3));

/**
 * decorators
 */


