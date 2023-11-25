---
group:
  title: Deprecated
  order: 3
order: 100
---

# parseUrl

**废弃，推荐使用[query-string](https://github.com/sindresorhus/query-string)**
 Match the parameter value of url by key

## Since

`2.0.4`

## Arguments

- `url: string`: the url to match
- `key: string`: The key to match

## Returns

- `Returns: string`: Matched value

## Examples

```js
import parseUrl, { parseUrlByHash, parseUrlBySearch } from 'o-orange/lib/parseUrl';

const url = 'http://localhost:8080/?key=3';

parseUrl(url, 'key'); // 3
parseUrl(url, 'value'); // null

console.log(parseUrlBySearch('key'));
parseUrlBySearch('value'); // null

// And can use parseUrlByHash
const hashUrl = 'http://localhost:8080/#/?key=3';

parseUrlHash('key'); // 3
parseUrlHash('value'); // null
```
