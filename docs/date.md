# Date

## dateFormat

### Since

`0.0.1`

### Arguments

- `date: string | number`: The array to convert
- `format: string`: yyyy, M, MM, dd, d, HH, H, mm, m, ss, s

### Returns

- `result: string`: The array to convert。

### Examples

```js
dateFormat(1548297785895, 'yyyy-MM-dd HH:mm:ss');

// 2019-01-24 10:43:05
```

---

## dateRange

Generate an ordered time interval array

### Since

`2.0.4`

### Arguments

- `beginTime: string | number | Date`: beginTime(Can be converted by new Date())
- `endTime: string | number | Date`: endTime endTime(Can be converted by new Date())
- `options: Object`
- `[options.dateType = 'yyyy-MM-dd HH:mm:ss']: string`: output time format
- `[options.rangeType = 'minute']: string`: Time interval
- `[options.rangeMultiple = 1]: number`: Time interval multiple
- `[options.fixedEndTime = false]: boolean`: No matter how keep endTime exists

### Returns

- `result: string`: The array to convert。
