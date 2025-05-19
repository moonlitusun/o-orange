---
group:
  title: 数字处理
order: 3
---

# toPercent

将数字转换为百分数。

## Since

`0.0.1`

## Arguments

- `num: string | number`: 待转换值
- `[options = {}]: Object`
  - `[options.multiply = 1]: number` 计算之前先乘于基数
  - `[...rest]` 支持`toFixed`方法的所有参数

## Returns

- `Returns: string`: 转换后的值

## Examples

```js
import { toPercent } from '@dz-web/o-orange';

test('toPercent', () => {
  expect(toPercent(0.6515, { multiply: 100, precision: 2 })).toBe('65.15%');
  expect(toPercent(65, 2)).toBe('65.00%');
  expect(toPercent(0.651525, { multiply: 100, precision: 3 })).toBe('65.153%');
  expect(toPercent(NaN)).toBe('--');
  expect(toPercent(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
})
```

```tsx
import { toPercent, toPositiveSign } from '@dz-web/o-orange';

console.log(toPositiveSign(toPercent(-0.3)))

export default () => null;
```
