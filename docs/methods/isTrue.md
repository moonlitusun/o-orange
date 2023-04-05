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
import { ensure, isTrue } from '../es';

test('ensure', () => {
  expect(ensure(1)).toEqual(1);
  expect(ensure()).toEqual('--');
  expect(ensure(0, 'hh')).toEqual('hh');
  expect(ensure(0)).toEqual('--');
  expect(ensure(isTrue(0), null, 'test')).toEqual('test');
})
```
