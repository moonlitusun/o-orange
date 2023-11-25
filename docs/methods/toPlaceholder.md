---
group:
  title: 数据转换
order: 3
---

# toPlaceholder

数字的缺省值。

`function toPlaceholder<T>(num: T): T | string {}`

## Since

`2.1.3`

## Arguments

- `num: string | number`: 待转换数字

## Returns

- `Returns: T`: 转换后的值

## Examples

```js
import { toPlaceholder } from '../es';

test('toPlaceholder', () => {
  expect(toPlaceholder(0)).toBe('--');
  expect(toPlaceholder(1)).toBe(1);
  expect(toPlaceholder(NaN)).toBe('--');
})
```
