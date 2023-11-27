---
group:
  title: 辅助函数
order: 2
---

# isTrue

判断是一个值是否是true，基于js的判断，唯一不同的就是0也是true。

## Since

`0.0.1`

## Arguments

- `value: any`: 考察值
- `[failureCallback]: string | (() => T)`: 失败的回调
- `[successCallback]: string | (() => N)`: 成功的回调

## Returns

- `Results: string | T | N`: 失败的时候返回失败的回调，成功返回成功的回调。

## Examples

```js
const isTrue = require('../dist/cjs/isTrue').default;

test('is false not zero', () => {
  expect(isTrue(0)).toBeTruthy();
  expect(isTrue(1)).toBeTruthy();
  expect(isTrue(null)).toBeFalsy();
  expect(isTrue(undefined)).toBeFalsy();
})
```
