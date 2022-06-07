
# Utils

## parseUrl()

[⬆️ Back to menu](#API)

```js
/**
 * Match the parameter value of url by key
 *
 * @category Util
 * @since 2.0.1
 * @param {string} url the url to match
 * @param {string} key The key to match
 * @returns {string} Matched value
 *
 */
```

*e.g:*

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
