---
group:
  order: 2
---

# dateRange

Generate an ordered time interval array

## Since

`2.0.4`

## Arguments

- `beginTime: string | number | Date`: beginTime(Can be converted by new Date())
- `endTime: string | number | Date`: endTime(Can be converted by new Date())
- `options: Object`
  - `[options.dateType = 'yyyy-MM-dd HH:mm:ss']: string`: output time format
  - `[options.rangeType = 'minute']: string`: Time interval
  - `[options.rangeMultiple = 1]: number`: Time interval multiple
  - `[options.fixedEndTime = false]: boolean`: No matter how keep endTime exists

## Returns

- `Returns: string`: The array to convert。

## Examples

```js
import { dateRange } from '../es';

test('dateRange', () => {
  expect(
    dateRange(new Date('2020-05-20 05:20'), new Date('2020-05-20 05:30'), {
      rangeType: 'minute',
    })
  ).toEqual([
    '2020-05-20 05:20:00',
    '2020-05-20 05:21:00',
    '2020-05-20 05:22:00',
    '2020-05-20 05:23:00',
    '2020-05-20 05:24:00',
    '2020-05-20 05:25:00',
    '2020-05-20 05:26:00',
    '2020-05-20 05:27:00',
    '2020-05-20 05:28:00',
    '2020-05-20 05:29:00',
    '2020-05-20 05:30:00',
  ]);
});
```
