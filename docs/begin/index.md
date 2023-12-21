---
nav:
  title: Begin
  order: 0
---

<h2 align="center" style="color: #b5b928b5;font-size:45px">o-orange</h2>

<h5 align="center" style="color: #b5b928b5;fontSize: 25px;marginBottom: 100px">Implementation of some useful functions</h5>

## Installation

Use npm

```bash
npm install @dz-web/o-orange
```

Use yarn

```bash
yarn add @dz-web/o-orange
```

## Usage

```js
import { ensure } from '@dz-web/o-orange';
```

## 全局配置

可以全局设置`orange`库的四舍五入规则。

```ts
import { toFixed, RoundingMode, orange } from '../dist';

orange.RM = RoundingMode.roundUp;

// DEMO
expect(toFixed(1.35, { precision: 1 })).toBe('1.4');
orange.RM = RoundingMode.roundUp;
expect(toFixed(1.25, { precision: 1 })).toBe('1.3');
```
