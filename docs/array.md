# Array

## pagination()

Cut the array

### Since

`0.0.1`

### Arguments

- `array: Array`: The array to execute
- `[pageNum = 1]: number`: Current page number(Calculate the page number from the back when it is negative)
- `[pageSize = 10]: number`: The size of one page.

### Returns

- `result: Array`: Returns the new array of result.

### Examples

```js
import pagination from 'o-orange/lib/pagination';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

pagination(arr, 1, 5)  // [1, 2, 3, 4, 5]

pagination(arr, 2, 3)  // [4, 5, 6]

pagination(arr, -1, 5) // [7, 8, 9, 10, 11]
```

---

## parseKeyHeader()

Convert the first subproject to an array of keys to a json array

### Since

`2.0.4`

### Arguments

- `target: Array`: The array to execute

### Returns

- `result: Array`: Returns the new array of result.

### Examples

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
