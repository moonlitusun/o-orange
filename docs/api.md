## Array

### pagination()

[⬆️ Back to menu](#API)

```js
/**
 * Cut the array
 *
 * @category Array
 * @since 0.0.1
 * @param {Array} array The array to execute
 * @param {number} [pageNum = 1] Current page number(Calculate the page number from the back when it is negative)
 * @param {number} [pageSize = 10] One page of size
 * @returns {Array}
 *
 */
```

*e.g:*

```js
import pagination from 'o-orange/lib/pagination';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

pagination(arr, 1, 5)  // [1, 2, 3, 4, 5]

pagination(arr, 2, 3)  // [4, 5, 6]

pagination(arr, -1, 5) // [7, 8, 9, 10, 11]
```

---

## parseKeyHeader

[⬆️ Back to menu](#API)

```js
/**
 * Convert the first subproject to an array of keys to a json array
 *
 * @since 2.0.4
 * @category Finace
 * @param {Array} target The array to execute
 * @returns {Array}
 *
 */
```

*e.g:*

```js
const k_line_data = [
  ['time', 'high', 'low', 'open', 'close', 'volume'],
  ['09: 30', '1.05', '5', '5.01', '5', '1000'],
  ['09: 31', '2.06', '5', '5.01', '5', '1000'],
  ['09: 32', '3.05', '5', '5.01', '5', '1000'],
  ['09: 33', '4.05', '5', '5.01', '5', '1000'],
  ['09: 34', '5.05', '5', '5.01', '5', '1000'],
];

parseKeyHeader(k_line_data);

//
[
  {"time":"09: 30","high":"1.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 31","high":"2.06","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 32","high":"3.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 33","high":"4.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 34","high":"5.05","low":"5","open":"5.01","close":"5","volume":"1000"}
]
```

---

## Date

### dateFormat

[⬆️ Back to menu](#API)

```js
/**
 *
 * Conversion time format
 *
 * @category Date
 * @since 0.0.1
 * @param {string | number} date The date to convert
 * @param {string} format yyyy, M, MM, dd, d, HH, H, mm, m, ss, s
 * @returns {string}
 *
 */
```

*e.g：*

```js
dateFormat(1548297785895, 'yyyy-MM-dd HH:mm:ss');

// 2019-01-24 10:43:05
```

---

### dateRange

[⬆️ Back to menu](#API)

```js
/**
 *
 * Generate an ordered time interval array
 *
 * @category Date
 * @since 2.0.4
 * @param {string | number | Date} beginTime beginTime(Can be converted by new Date())
 * @param {string | number | Date} endTime endTime(Can be converted by new Date())
 * @param {Object} options
 * @param {The second argument of the dateFormat function} [options.dateType = 'yyyy-MM-dd HH:mm:ss'] output time format
 * @param {string} [options.rangeType = 'minute'] Time interval
 * @param {number} [options.rangeMultiple = 1] Time interval multiple
 * @param {bool} [options.fixedEndTime = false] No matter how keep endTime exists
 * @returns {Array}
 *
 */
```

## Utils

### parseUrl()

[⬆️ Back to menu](#API)

```js
/**
 * Match the parameter value of url by key
 *
 * @category Util
 * @since 2.0.1
 * @param {string} url the url to match
 * @param {string} key The key to match
 * @returns {string} Matched value
 *
 */
```

*e.g:*

```js
import parseUrl, { parseUrlByHash, parseUrlBySearch } from 'o-orange/lib/parseUrl';

const url = 'http://localhost:8080/?key=3';

parseUrl(url, 'key'); // 3
parseUrl(url, 'value'); // null

parseUrlBySearch('key'); // 3
parseUrlBySearch('value'); // null

// And can use parseUrlByHash
const hashUrl = 'http://localhost:8080/#/?key=3';

parseUrlHash('key'); // 3
parseUrlHash('value'); // null
```

## Lang

### isArray()

```js
/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 *
 */
```

*e.g:*

```js
isArray(3) // false

isArray([]) // true
```

---

### isObject()

```js
/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 *
 */
```

*e.g:*

```js
isObject(3)  // false

isObject({}) // true
```

---

### isUndefined()

```js
/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 *
 */
```

*eg:*

```js
isUndefined(3)           // false

isUndefined({}.property) // true
```

---

### isNumber()

```js
/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 *
 */
```

*eg:*

```js
isUndefined(3)   // true

isUndefined('3') // false
```

---
