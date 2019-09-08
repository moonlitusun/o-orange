<h2 align="center" style="color: #b5b928b5;font-size:45px">🍊 o-orange</h1>

<h5 align="center" style="color: #b5b928b5;fontSize: 25px;marginBottom: 100px">Implementation of some useful functions</h5>

# Installation

```bash
npm install o-orange
```

```bash
yarn add o-orange
```

# Usage

```js
import O from 'o-orange';
```

Or

```js
import isNumber from 'o-orange/lib/isNumber';
```

# API

- [Array](#Array)

  - [pagination()](#pagination)

- [Date](#Date)

  - [dateFormat()](#dateFormat)
  - [dateRange()](#dateRange)

- [Utils](#Utils)

  - [parseUrl()](#parseUrl)
  - [parseUrlByHash()](#parseUrl)
  - [parseUrlBySearch()](#parseUrl)

- [Finace](#Finace)

  - [toThousand()](#toThousand)
  - [toPercent()](#toPercent)
  - [toFixed()](#toFixed)
  - [parseKeyHeader()](#parseKeyHeader)

- [Lang](#Lang)

  - [isArray()](#isArray)
  - [isObject()](#isObject)
  - [isUndefined()](#isUndefined)
  - [isNumber()](#isNumber)


## Array

### pagination()

[⬆️](#API)

```js
/**
 * Cut the array
 *
 * @category Array
 * @since 0.0.1
 * @param {Array} array The array to execute
 * @param {number} [pageNum = 1] Current page number(Calculate the page number from the back when it is negative)
 * @param {number} [pageSize = 10] One page of Size
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

## Date

### dateFormat()

[⬆️](#API)

```js
/**
  * Conversion time format
  *
  * @category Date
  * @since 0.0.1
  * @param {string | number} date The date to convert
  * @param {string} format [yyyy, M, MM, dd, d, HH, H, mm, m, ss, s]
  * @returns {string}
  *
  */
```

*e.g:*

```js
import dateFormat from 'o-orange/lib/dateFormat';

dateFormat(1543375099132, 'yyyy-MM-dd HH:mm:ss') // 2018-11-28 11:18:19

dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss')    // 2018-11-28 11:20:46

dateFormat('2018-5-12', 'yyyy-MM-dd HH:mm:ss')   // 2018-05-12 00:00:00

dateFormat(1543375099132, 'HH:mm:ss')            // 11:18:19
```

### dateRange()

[⬆️](#API)

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
 * @param {The second argument of the dateFormat function} options.dateType output time format
 * @param {string} options.rangeType Time interval
 * @param {number} options.rangeMultiple Time interval multiple
 * @param {bool} options.fixedEndTime No matter how keep endTime exists
 * @returns {Array}
 *
 */
```

*e.g:*

```js
```

## Utils

### parseUrl()

[⬆️](#API)

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

## Finace

### toThousand()

[⬆️](#API)

```js
/**
 * Convert numbers to thousands of digits
 *
 * @categry Number
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {string} [sign = ','] Splitter
 * @returns  {string}
 *
 */
```

*e.g:*

```js
toThousand('16000')      // 16,000

toThousand('16000.1021') // 16,000.1021

toThousand('16000', ' ') // 16 000
```

---

### toPercent()

[⬆️](#API)

```js
/**
 * Convert numbers to percentage
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {number} [length = 2] The length to Keep
 * @param {string} [replace = '---'] Replace string when num is NaN or not number
 * @returns {string}
 *
 */
```

*e.g:*

```js
toPercent(0.3)            // 30.00%

toPercent(0.3235, 1)      // 32.4%

toPercent(0.32, 3)        // 32.000%

toPercent('notNumber')    // ---

toPercent(NaN)            // ---

toPercent('x', 2, '0000') // 0000
```

---

### toFixed()

[⬆️](#API)

```js
/**
 * Convert numbers to fixed
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {number} [length = 2] The length to Keep
 * @param {string} [replace = '---'] Replace string when targetNum is NaN or not number
 * @returns {string}
 *
 */
```

*e.g:*

```js
toFixed(3)              // 3.00

toFixed(3.15511, 1)     // 3.2

toFixed(3.2, 3)         // 3.200

toFixed('notNumber')    // ---

toFixed(NaN)            // ---

toFixed('x', 2, '0000') // 0000
```

## parseKeyHeader()

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
