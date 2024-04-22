---
nav:
  title: FAQs
  order: 3
---

## 如何显示复杂的效果？

`Methods`中的方法遵循单一原则，一个函数尽量只做一件事，比如转成千分位、保留小数位，但是正常开发中，往往需要复合展示，比如：

`0.064385` 要显示成`+6.44%`。一眼看上去需要经过几个转换

- 保留小数位
- 转百分数
- 加上正符号

没有一个函数可以做到这个效果。但是可以组合函数去达到要求，比如：

```jsx
/**
 * defaultShowCode: true
 */
import { toFixed, toPositiveSign, toPercent } from '@dz-web/o-orange';

const num = 0.064385;
const target = toPositiveSign(toPercent(num, { multiply: 100 }));

export default () => target;
```

也有一些其他常见的如：

```jsx
/**
 * defaultShowCode: true
 */
import { toFixed, toPositiveSign, toPercent } from '@dz-web/o-orange';

const num = 0.064385;
const target1 = toPositiveSign(toFixed(num));
const target2 = toPositiveSign(toPercent(-num, { multiply: 10 }));

export default () => (
  <>
    <p>保留小数位+正负符号：{target1}</p>
    <p>转换百分数+正负符号：{target2}</p>
  </>
);
```

**当然，这种嵌套函数的可读性和可调试性都不高，所以可以使用一些compose函数来增加可读性，比如[lodash.flow](https://lodash.com/docs/4.17.15#flow)，下面是一个简单的实例**

```jsx
/**
 * defaultShowCode: true
 */
import { toFixed, toPositiveSign, toPercent } from '@dz-web/o-orange';

function compose(...funcs) {
  const start = funcs.length - 1;

  return function(...args) {
    let i = start;
    let result = funcs[start].apply(this, args);
    while (i--) result = funcs[i].call(this, result);
    return result;
  }
}

const num = 0.064385;
const target = compose(toPositiveSign, toFixed)(num);

export default () => target;
```
