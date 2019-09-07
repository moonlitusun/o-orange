/**
 * Match the parameter value of url by key
 *
 * @category Util
 * @since 2.0.1
 * @param {string} url the url to match
 * @param {string} key The key to match
 * @returns {string} Matched value
 * @example
 *
 * const url = 'http://localhost:8080/?key=3';
 * 
 * parseUrl(url, 'key')
 * // => 3
 *
 * parseUrlBySearch('key')
 * // => 3
 *
 * const url = 'http://localhost:8080/#/?key=3';
 *
 * parseUrlByHash('key')
 * // => 3
 *
 * parseUrlByHash('value')
 * // => null
 *
 */
function parser(address: string): Function {
  return function(key: string): string {
    const result: any = address.match(new RegExp(`(\\?|\\&)${key}=([^\\&]+)`));
    return result ? result[2] : null;
  }
}

export const parseUrlByHash: Function = parser(window.location.hash);

export const parseUrlBySearch: Function = parser(window.location.search);

export default (address, key) => parser(address)(key);
