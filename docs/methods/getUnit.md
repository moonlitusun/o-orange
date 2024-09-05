---
group:
  title: 数字处理
order: 8
---

# getUnit

获取数字的单位。

## Since

`4.4.0`

## Arguments

- `num: string | number`: 待转换值
- `[options = {}]: Object`
  - `[options.lanType = Lang.EN_US]: Lang` 语言类型

## Returns

- `Returns: null | Unit`: 转换后的值

## Examples

```js
import { getUnit, Lang, orange } from '@dz-web/o-orange';

test('GetUnit', () => {
  expect(getUnit(undefined)).toEqual(null);
  expect(getUnit(90)).toEqual(null);
  expect(getUnit(1100)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );

  expect(getUnit(122000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );
  expect(getUnit(122000, { lanType: Lang.ZH_CN })).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万')
  );
  expect(getUnit(122000, { lanType: Lang.ZH_TW })).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬')
  );
});
```

```tsx
import { getUnit, orange, Lang } from '@dz-web/o-orange';

orange.precision = 2;
orange.lang = Lang.ZH_CN;

const unit = getUnit(122000);
console.log(unit);

export default function App() {
  return <div>Hello World</div>
}
```
