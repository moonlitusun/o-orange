---
nav:
  title: Begin
  order: 0
---

<h2 align="center" style="color: #b5b928b5;font-size:45px">🍊 o-orange</h2>

<h5 align="center" style="color: #b5b928b5;fontSize: 25px;marginBottom: 100px">Implementation of some useful functions for Financial Industry</h5>

## Installation

Use pnpm

```bash
pnpm add @dz-web/o-orange
```

Use yarn

```bash
yarn add @dz-web/o-orange
```

## Usage

```js
import { toFixed } from '@dz-web/o-orange';

toFixed(1.5);
```

## Constants

### RoundingMode

```ts
// see https://mikemcl.github.io/big.js/#rm
enum RoundingMode {
  roundDown,
  roundHalfUp,
  roundHalfEven,
  roundUp
}
```

### Lang

支持的语言

```ts
enum Lang {
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',
  EN_US = 'en-US'
}
```

## Global Configuration

### RM

可以全局设置`orange`库的四舍五入规则。

:::info{title=使用场景}
主要是为了项目中全局切换四舍五入的规则，因为Javascript默认的规则是银行家舍入，也就是四舍六入五成双，并不是我们以为的四舍五入。

配置参考[RM](https://mikemcl.github.io/big.js/#rm)。
:::

- 类型：[RoundingMode](#roundingmode)
- 默认：`RoundingMode.roundHalfEven`

```ts
import { toFixed, RoundingMode, orange } from '@dz-web/o-orange';

orange.RM = RoundingMode.roundUp;

// DEMO
expect(toFixed(1.35, { precision: 1 })).toBe('1.4');
orange.RM = RoundingMode.roundUp;
expect(toFixed(1.25, { precision: 1 })).toBe('1.3');
```

### lanType

:::info{title=使用场景}
主要是为了项目中全局切换语言。

最佳实践：监听语言切换修改这个配置，这样就可以避免使用`toUnit`的时候每次要传语言。
:::

- 类型：[Lang](#Lang)
- 默认：`Lang.EN_US`

```ts
import { Lang, orange } from '@dz-web/o-orange';

orange.lang = Lang.EN_US;
```

### placeholder

:::info{title=使用场景}
全局修改默认值
:::

- 类型：`string`
- 默认：`--`

```ts
import { orange } from '@dz-web/o-orange';

orange.placeholder = '--';
```

### precision

:::info{title=使用场景}
全局修改精度。
:::

- 类型：`number`
- 默认：`2`

```ts
import { orange } from '@dz-web/o-orange';

orange.precision = 3;
```

### ignoreIntegerPrecision

:::info{title=使用场景}
为了显示美观，保留小数位的时候是否忽略整数。

举例：

- when false: `toFixed(1) => 1.00`
- when true: `toFixed(1) => 1`

:::

- 类型：`boolean`
- 默认：`true`

```ts
import { orange } from '@dz-web/o-orange';

orange.ignoreIntegerPrecision = false;
```
