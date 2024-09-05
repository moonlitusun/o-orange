---
group:
  title: 数字处理
order: 8
---

# getUnit

获取数字的单位。

## Since

`2.1.0`

## Arguments

- `num: string | number`: 待转换值
- `[options = {}]: Object`
  - `[options.lanType = Lang.EN_US]: Lang` 语言类型
  - `[...rest]` 支持`toFixed`方法的所有参数

## Returns

- `Returns: string`: 转换后的值

## Examples

```js
import { toUnit, Lang, orange } from '@dz-web/o-orange';

test('ToUnit', () => {
  expect(toUnit(undefined)).toBe('--');
  expect(toUnit(1100)).toBe('1.10K');

  expect(toUnit(122000)).toBe('122K');
  expect(toUnit(122000, { lanType: Lang.ZH_CN })).toBe('12.20万');
  expect(toUnit(122000, { lanType: Lang.ZH_TW })).toBe('12.20萬');
});

```

```tsx
import { getUnit } from '@dz-web/o-orange';

const unit = getUnit(122000);
console.log(unit);

export default function App() {
  return <div>Hello World</div>
}
```
