---
group:
  title: 辅助函数
order: 3
---

# getSignByComparison

给出一个值和基准数值(一般为0)比较来获取sign。

一般用于判断股票的涨跌。

## Since

`4.3.0`

## Arguments

- `num: string | number`: 待转换值
- `[options = {}]: Object`
  - `[options.equalSign]?: string` 相等时返回的sign
  - `[options.raiseSign = 'price-decline']?: string` 大于基准值时返回的sign
  - `[options.declineSign = 'price-decline']?: string` 小于基准值时返回的sign
  - `[options.balance = 0]?: number` 基准值

## Returns

- `Results: string`: `options.equalSign` | `options.raiseSign` | `options.declineSign`

## Examples

```js
import { getSignByComparison } from '@dz-web/o-orange'

test('getSignByComparison', () => {
  expect(getSignByComparison(1)).toEqual('price-raise');
  expect(getSignByComparison(0)).toEqual(undefined);
  expect(getSignByComparison()).toEqual(undefined);
  expect(getSignByComparison(-1)).toEqual('price-decline');

  expect(getSignByComparison(1, { equalSign: 'equal', balance: 1 })).toEqual('equal');
  expect(getSignByComparison(1, { equalSign: 'equal', raiseSign: 'raise', balance: -1 })).toEqual('raise');
  expect(getSignByComparison(1, { equalSign: 'equal', declineSign: 'decline', balance: 3 })).toEqual('decline');
})
```
