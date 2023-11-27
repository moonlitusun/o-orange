---
group:
  title: 数据转换
order: 2
---

# toSlice

和`toFixed`唯一不同的就是`toSlice`是直接截取，而不是四舍五入。

**等于toFixed方法的RM参数设置为roundHalfEven**

## Since

`3.0.3`

## Examples

```js
import { toSlice } from '../es';

test('toSlice', () => {
  expect(toSlice(1.63456461, { precision: 2 })).toBe('1.63');
  expect(toSlice(1.63456461, { precision: 3 })).toBe('1.634');
  expect(toSlice(1, { precision: 2 })).toBe('1.00');
  expect(toSlice(-1.63456461, { precision: 2 })).toBe('-1.63');
  expect(toSlice(-1.63456461, { precision: 3 })).toBe('-1.634');
  expect(toSlice(-1, { precision: 2 })).toBe('-1.00');
  expect(toSlice(0, { precision: 2 })).toBe('0.00');
  expect(toSlice(1.43543, { precision: 0 })).toBe('1');
});
```

```tsx
import { toSlice } from '@dz-web/o-orange'


export default () => {
  console.log(toSlice(0.9636, { precision: 3 }))

  return (<div>1</div>)
}
```
