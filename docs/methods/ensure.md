---
group:
  title: 辅助函数
  order: 3
order: 1
---

# ensure

确保一个行为是在考察值有效的时候再去做。使用场景是基于一个值去做计算的时候要先确保它是存在的，避免报错。

## Since

`3.1.0`

## Arguments

- `value: any`: 考察值
- `[failureCallback]: string | (() => T)`: 失败的回调
- `[successCallback]: string | (() => N)`: 成功的回调

## Returns

- `Results: string | T | N`: 失败的时候返回失败的回调，成功返回成功的回调。

## Examples

```js
import { ensure, isTrue } from '../es';

test('ensure', () => {
  expect(ensure(1)).toEqual(1);
  expect(ensure()).toEqual('--');
  expect(ensure(0, 'hh')).toEqual('hh');
  expect(ensure(0)).toEqual('--');
  expect(ensure(isTrue(0), null, 'test')).toEqual('test');
})
```
