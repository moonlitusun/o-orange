# toPercent

将数字转换为百分数。

## Since

`0.0.1`

## Arguments

- `num: string | number`: 待转换数字
- `[options = {}]: Object`
  - `[options.placeholder = --]: string` 当待转换数字是NaN或者空的时候的缺省
  - `[options.precision = 2]: number` 保留小数位
  - `[options.multiply = 1]: number` 计算之前先乘于基数

## Returns

- `Returns: string`: 转换后的值

## Examples

```js
import { toPercent } from '../es';

test('toPercent', () => {
  expect(toPercent(0.6515, { multiply: 100, precision: 2 })).toBe('65.15%');
  expect(toPercent(65, 2)).toBe('65.00%');
  expect(toPercent(0.651525, { multiply: 100, precision: 3 })).toBe('65.153%');
  expect(toPercent(NaN)).toBe('--');
  expect(toPercent(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
})
```
