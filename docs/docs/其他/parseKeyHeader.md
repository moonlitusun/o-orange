# parseKeyHeader

Convert the first subproject to an array of keys to a json array

## Since

`2.0.4`

## Arguments

- `target: Array`: The array to execute

## Returns

- `Returns: Array`: Returns the new array of result.

## Examples

```js
const k_line_data = [
  ['time', 'high', 'low', 'open', 'close', 'volume'],
  ['09: 30', '1.05', '5', '5.01', '5', '1000'],
  ['09: 31', '2.06', '5', '5.01', '5', '1000'],
  ['09: 32', '3.05', '5', '5.01', '5', '1000'],
  ['09: 33', '4.05', '5', '5.01', '5', '1000'],
  ['09: 34', '5.05', '5', '5.01', '5', '1000'],
];

parseKeyHeader(k_line_data);

//
[
  {"time":"09: 30","high":"1.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 31","high":"2.06","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 32","high":"3.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 33","high":"4.05","low":"5","open":"5.01","close":"5","volume":"1000"},
  {"time":"09: 34","high":"5.05","low":"5","open":"5.01","close":"5","volume":"1000"}
]
```
