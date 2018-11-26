# Introduction

o-orange.js

---

# Installation

```shell
npm install o-orange
```

```shell
yarn add o-orange
```

---

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

#### example

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

_array.pagination(arr, 1, 5) // [1, 2, 3, 4, 5]

_array.pagination(arr, 2, 3) // [4, 5, 6]

_array.pagination(arr, -1, 5) // [7, 8, 9, 10, 11]
```

### shuffle()

```js
/**
 * Upset the array
 *
 * @param { array } sourceArr The Array to execute
 * @returns { array }
 */
```

#### example

```js
const arr = [1, 2, 3, 4, 5];

shuffle(arr) // [5, 4, 1, 2, 3]

shuffle(arr) // [2, 5, 3, 4, 1]
```