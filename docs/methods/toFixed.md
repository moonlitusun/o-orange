---
nav:
  title: 方法
  order: 1
---

# toFixed

JavaScript中`toFixed`的边界处理。

## Constans

```ts
// see https://mikemcl.github.io/big.js/#rm
export enum RoundingMode {
  roundDown,
  roundHalfUp,
  roundHalfEven,
  roundUp
}
```

## Since

`0.0.1`

## Arguments

- `num: string | number`: 待转换数字
- `[options = {}]: Object`
  - `[options.placeholder = --]: string` 当待转换数字是NaN或者空的时候的缺省
  - `[options.precision = 2]: number` 保留小数位
  - `[options.ignoreIntegerPrecision = false]: boolean` 如果是整数，就忽略
  - `[options.RM = RoundingMode.roundHalfEven]: boolean` 小数保留规则，默认四舍六入五成双

## Returns

- `Returns: string`: 转换后的值

## Examples

```tsx
import { toFixed } from '@dz-web/o-orange';

console.log(
  toFixed(NaN, { placeholder: 'xxxx' }),
  toFixed(0, { precision: 2 }),
);

// test('toFixed', () => {
//   expect(toFixed(NaN, { placeholder: 'xxxx' })).toBe('xxxx');
//   expect(toFixed('none')).toBe('--');
//   expect(toFixed('', { precision: 3 })).toBe('--');
//   expect(toFixed(0, { precision: 2 })).toBe('0.00');
//   expect(toFixed(1.2345, { precision: 3 })).toBe('1.234');
//   expect(toFixed(1, { ignoreIntegerPrecision: true, precision: 3 })).toBe(1);
// })
export default () => null;
```