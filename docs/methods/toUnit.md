---
group:
  title: 数字处理
order: 7
---

# toUnit

将数字转换为带单位的。

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

test('ToUnit By EN_US', () => {
  orange.precision = 2;
  expect(toUnit(1000)).toBe("1K");
  expect(toUnit(1000, { precision: 3, ignoreIntegerPrecision: false })).toBe("1.000K");
  expect(toUnit(12200)).toBe('12.20K');

  orange.precision = 3;
  expect(toUnit(122000)).toBe('122K');
  expect(toUnit(1220000)).toBe('1.220M');
  expect(toUnit(12200000)).toBe('12.200M');
  expect(toUnit(122000000)).toBe('122M');
  expect(toUnit(1220000000)).toBe('1.220B');
  expect(toUnit(12200000000)).toBe('12.200B');
  expect(toUnit(122000000000)).toBe('122B');
  expect(toUnit(1220000000000)).toBe('1.220T');
  expect(toUnit(12200000000000)).toBe('12.200T');
  expect(toUnit(122000000000000)).toBe('122T');
  expect(toUnit(1220000000000000)).toBe('1220T');
});

test('toUnit By ZH_CN', () => {
  orange.precision = 2;
  orange.lang = Lang.ZH_CN;

  expect(toUnit(1000)).toBe("1000");
  expect(toUnit(122000)).toBe('12.20万');
  expect(toUnit(1220000)).toBe('122万');
  expect(toUnit(12200000)).toBe('1220万');
  expect(toUnit(122000000)).toBe('1.22亿');
  expect(toUnit(1220000000)).toBe('12.20亿');
  expect(toUnit(12200000000)).toBe('122亿');
  expect(toUnit(122000000000)).toBe('1220亿');
  expect(toUnit(1220000000000)).toBe('1.22万亿');
  expect(toUnit(12200000000000)).toBe('12.20万亿');
  expect(toUnit(122000000000000)).toBe('122万亿');
  expect(toUnit(1220000000000000)).toBe('1220万亿');
})

test('toUnit By ZH_TW', () => {
  orange.precision = 2;
  orange.lang = Lang.ZH_TW;

  expect(toUnit(1000)).toBe("1000");
  expect(toUnit(122000)).toBe('12.20萬');
  expect(toUnit(1220000)).toBe('122萬');
  expect(toUnit(12200000)).toBe('1220萬');
  expect(toUnit(122000000)).toBe('1.22億');
  expect(toUnit(1220000000)).toBe('12.20億');
  expect(toUnit(12200000000)).toBe('122億');
  expect(toUnit(122000000000)).toBe('1220億');
  expect(toUnit(1220000000000)).toBe('1.22萬億');
  expect(toUnit(12200000000000)).toBe('12.20萬億');
  expect(toUnit(122000000000000)).toBe('122萬億');
  expect(toUnit(1220000000000000)).toBe('1220萬億');
})
```
