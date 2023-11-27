---
group:
  title: 数组处理
order: 2
---

# pagination

切割数组

## Since

`0.0.1`

## Arguments

- `array: Array`: The array to execute
- `[pageNum = 1]: number`: Current page number(Calculate the page number from the back when it is negative)
- `[pageSize = 10]: number`: The size of one page.

## Returns

- `Returns: Array`: Returns the new array of result.

## Exampless

```js
import { pagination } from '../es';

test('is pagination', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  expect(pagination(arr, 2, 8)).toEqual([9, 10]);
  expect(pagination(arr, 3, 3)).toEqual([7, 8, 9]);
})
```
