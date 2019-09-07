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

- [Utils](#Utils)

  - [parseUrl()](#parseUrl)
  - [parseUrlByHash()](#parseUrl)
  - [parseUrlBySearch()](#parseUrl)
  - [isNumber()](#isNumber)
  - [isObject()](#isObject)
  - [isArray()](#isArray)
  - [isUndefined()](#isUndefined)

- [Finace](#Finace)

  - [toFixed()](#toFixed)
  - [toPercent()](#toPercent)
  - [toThousand()](#toThousand)
  - [parseKeyHeader()](#parseKeyHeader)

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

*eg:*

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

*eg:*

```js
import dateFormat from 'o-orange/lib/dateFormat';

dateFormat(1543375099132, 'yyyy-MM-dd HH:mm:ss') // 2018-11-28 11:18:19

dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss')    // 2018-11-28 11:20:46

dateFormat('2018-5-12', 'yyyy-MM-dd HH:mm:ss')   // 2018-05-12 00:00:00

dateFormat(1543375099132, 'HH:mm:ss')            // 11:18:19
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

*eg:*

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

### convertToThousand()

[⬆️](#API)

```js
/**
 * Convert numbers to thousands of digits
 *
 * @param { number } targetNum    The number to convert
 * @param { string } [sign = ','] Splitter
 * @returns { string }
 * @since 0.0.1
 */
```

*eg:*

```js
convertToThousand('16000')      // 16,000

convertToThousand('16000.1021') // 16,000.1021

convertToThousand('16000', ' ') // 16 000
```

---

### convertToPercent()

```js
/**
 * Convert numbers to percentage
 *
 * @param { number } targetNum          The number to convert
 * @param { number } [length = 2]       The length to Keep
 * @param { string } [replace = '---']  Replace string when targetNum is NaN or not number
 * @returns { string }
 * @since 0.0.1
 */
```

*eg:*

```js
convertToPercent(0.3)            // 30.00%

convertToPercent(0.3235, 1)      // 32.4%

convertToPercent(0.32, 3)        // 32.000%

convertToPercent('notNumber')    // ---

convertToPercent(NaN)            // ---

convertToPercent('x', 2, '0000') // 0000
```

---

### convertToFixed()

```js
/**
 * Convert numbers to fixed
 *
 * @param { number | string } targetNum The number to convert
 * @param { number } [length = 2]       The length to Keep
 * @param { string } [replace = '---']  Replace string when targetNum is NaN or not number
 * @returns { string }
 * @since 0.0.1
 */
```

*eg:*

```js
convertToFixed(3)              // 3.00

convertToFixed(3.15511, 1)     // 3.2

convertToFixed(3.2, 3)         // 3.200

convertToFixed('notNumber')    // ---

convertToFixed(NaN)            // ---

convertToFixed('x', 2, '0000') // 0000
```

## _time

```shell
import _time from 'o-orange/dist/time';

or

import { fixedTimerd, ... } from 'o-orange/dist/time';
```

### fixedTimerd()

```js
/**
 * Correction timer
 *
 * @param  { number } duration   The time of timerd
 * @param  { function } handleFn The function of timerd
 * @returns { void }
 * @since 0.0.1
 */
```

*eg:*

```js
fixedTimerd(2000, () => console.log('run')) // run run run ....
```

---

## _type

```shell
import _type from 'o-orange/dist/type';

or

import { isArray, ... } from 'o-orange/dist/type';
```

### isArray()

```js
/**
 * check-array
 *
 * @returns { boolean }
 * @since 0.0.1
 */
```

*eg:*

```js
isArray(3) // false

isArray([]) // true
```

---

### isObject()

```js
/**
 * check-object
 *
 * @returns { boolean }
 * @since 0.0.1
 */
```

*eg:*

```js
isObject(3)  // false

isObject({}) // true
```

---

### isUndefined()

```js
/**
 * check-undefined
 *
 * @returns { boolean }
 * @since 0.0.1
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
 * check-number
 *
 * @returns { boolean }
 * @since 0.0.1
 */
```

*eg:*

```js
isUndefined(3)   // true

isUndefined('3') // false
```

---
