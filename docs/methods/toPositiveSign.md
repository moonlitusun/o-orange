---
group:
  title: 数据转换
order: 5
---

# toPositiveSign

判断数字正负，在前面加上`+ / -`。

## Since

`2.1.0`

## Arguments

- `num: string | number`: 待转换数字
- `[options = {}]: Object`
  - `[options.balance = 0]: number` 基准值，默认为0，意思就是大于0的加上+。
  - `[options.canEqual = false: boolean` 是否可以相等，意思是 >= 0 都 +。
  - `[options.placeholder = --]: string` 默认值
  - `[options.parseFloat = true]: boolean` 是否自动剥离传进来的字符串，比如传进来`30%`，会被转成`30`来比较。

## Returns

- `Returns: string`: 转换后的值

## Examples

```js
import { toPercent, toPositiveSign } from '@dz-web/o-orange';

test('toPositiveSign', () => {
  expect(toPositiveSign(1)).toBe('+1');
  expect(toPositiveSign(200)).toBe('+200');
  expect(toPositiveSign(-200)).toBe('-200');
  expect(toPositiveSign(0)).toBe('0');
  expect(toPositiveSign(0, { canEqual: true })).toBe('+0');
  expect(toPositiveSign('--')).toBe('--');
  expect(toPositiveSign(toPercent(-0.3))).toBe('+30%');
})
```
