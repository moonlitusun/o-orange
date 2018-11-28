# Introduction

o-orange.js

# Installation

```shell
npm install o-orange
```

```shell
yarn add o-orange
```

# Usage

- [_array](#_array)

  - [pagination()](#pagination)

  - [shuffle()](#shuffle)

- [_date](#_date)

  - [queryTimezoneTime()](#queryTimezoneTime)

- [_decorator](#_decorator)

  - [bind](#bind)

  - [debounce](#debounce)

- [_location](#_location)

  - [normalizeSearch()](#normalizeSearch)

- [_number](#_number)

  - [pad()](#pad)

  - [convertToThousand()](#convertToThousand)

  - [convertToPercent()](#convertToPercent)

  - [convertToFixed()](#convertToFixed)

- [_time](#_time)

  - [fixedTimerd()](#fixedTimerd)

  - [dateFormat()](#dateFormat)

- [_type](#_type)

  - [isArray()](#isArray)

  - [isObject()](#isObject)

  - [isUndefined()](#isUndefined)

  - [isNumber()](#isNumber)

## _array

```shell
import _array from 'o-orange/dist/array';

or

import { pagination, ... } from 'o-orange/dist/array';
```

### pagination()

```js
/**
 * Cut the array
 *
 * @param { array } sourceArr        The Array to execute
 * @param { number } [pageNum = 1]   Current page number(Calculate the page number from the back when it is negative)
 * @param { number } [pageSize = 10] One page of Size
 * @returns { array }
 * @since 0.0.1
 */
```

*eg:*

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

_array.pagination(arr, 1, 5)  // [1, 2, 3, 4, 5]

_array.pagination(arr, 2, 3)  // [4, 5, 6]

_array.pagination(arr, -1, 5) // [7, 8, 9, 10, 11]
```

---

### shuffle()

```js
/**
 * Upset the array
 *
 * @param { array } sourceArr The Array to execute
 * @returns { array }
 * @since 0.0.1
 */
```

*eg:*

```js
const arr = [1, 2, 3, 4, 5];

shuffle(arr) // [5, 4, 1, 2, 3]

shuffle(arr) // [2, 5, 3, 4, 1]
```

## _date

```shell
import _date from 'o-orange/dist/date';

or

import { queryTimezoneTime, ... } from 'o-orange/dist/date';
```

### queryTimezoneTime()

```js
/**
 * Query time zone time
 *
 * @param { number } timezone      The timezone to query
 * @param { string | number } date The time to query
 * @returns { string }
 * @since 0.0.1
 */
```

*eg:*

```js
queryTimezoneTime(15, '2018-10-20 5:30:20') // 10-20 12:30:20

queryTimezoneTime(-8, '2018-10-20 5:30:20') // 10-19 13:30:20
```

## _decorator

```shell
import _decorator from 'o-orange/dist/decorator';

or

import { bind, ... } from 'o-orange/dist/decorator';
```

### bind

```js
/**
 * bind this
 *
 * @since 0.0.3
 */
```

*eg:*

```js
class Eg {
  @bind()
  egsMethod() {
    console.log(this) // Eg
  }
}
```

---

### debounce

```js
/**
 * debounce
 *
 * @param { number } [duration = 2000]
 * @since 0.0.3
 */
```

*eg:*

```js
class Eg {
  @debounce(1000)
  egsMethod() {
    // do something
    // ...
  }
}
```

## _location

```shell
import _location from 'o-orange/dist/location';

or

import { normalizeSearch, ... } from 'o-orange/dist/location';
```

### normalizeSearch()

```js
/**
 * normalize location.search
 * 
 * @param { string } key
 * @param { string } [type = brower] 'brower' | 'hash'
 * @since 0.0.1
 */
```

*eg:*

```js

// This page's url is xx.com?code=1&name=2

normalizeSearch('code', 1) // 1

normalizeSearch('name', 1) // 2
```

## _number

```shell
import _number from 'o-orange/dist/number';

or

import { pad, ... } from 'o-orange/dist/number';
```

### pad()

```js
/**
 * Fill the number to the specified length
 * 
 * @param {number} targetNum    The number to convert
 * @param {number} [length = 2] The length to limit
 * @returns { string }
 * @since 0.0.1
 */
```

*eg:*

```js
pad(1)    // 01

pad(1, 3) // 001
```

---

### convertToThousand()

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

### dateFormat()

```js
/**
 * dateFormat
 * 
 * @param { Date } date     The Date to convert
 * @param { string } format [yyyy, M, MM, dd, d, HH, H, mm, m, ss, s]
 */
```

*eg:*

```js
dateFormat(1543375099132, 'yyyy-MM-dd HH:mm:ss') // 2018-11-28 11:18:19

dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss')    // 2018-11-28 11:20:46

dateFormat('2018-5-12', 'yyyy-MM-dd HH:mm:ss')   // 2018-05-12 00:00:00

dateFormat(1543375099132, 'HH:mm:ss')            // 11:18:19
```

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