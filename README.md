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
 * @param { array } sourceArr The Array to execute
 * @param { number } [pageNum = 1] Current page number(Calculate the page number from the back when it is negative)
 * @param { number } [pageSize = 10] One page of Size
 * @returns { array }
 */
```

*eg:*

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

_array.pagination(arr, 1, 5) // [1, 2, 3, 4, 5]

_array.pagination(arr, 2, 3) // [4, 5, 6]

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

### queryTimezoneTime

```js
/**
 * Query time zone time
 *
 * @param { number } timezone The timezone to query
 * @param { string | number } date The time to query
 * @returns { string }
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

### normalizeSearch

```js
/**
 * normalize location.search
 * 
 * @param { string } key
 * @param { string } [type = brower] 'brower' | 'hash'
 */
```

*eg:*

```js

// This page's url is xx.com?code=1&name=2

normalizeSearch('code', 1) // 1

normalizeSearch('name', 1) // 2
```