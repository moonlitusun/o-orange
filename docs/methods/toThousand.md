---
group:
  title: 数字处理
order: 4
---

# toThousand

将数字转换为千分位数字。

## Since

`0.0.1`

## Arguments

- `num: string | number`: 待转换数字
- `[sign = ,]: string`: 分隔符

## Returns

- `Returns: string`: 转换后的值

## Examples

```js
import { toThousand } from '../es';

test('toThousand', () => {
  expect(toThousand(11345)).toBe('11,345');
  expect(toThousand(11345.2345)).toBe('11,345.2345');
  expect(toThousand(11345.2345, ' ')).toBe('11 345.2345');
  expect(toThousand(11345123132.2345)).toBe('11,345,123,132.2345');
})
```
