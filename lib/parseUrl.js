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
function parser(address) {
    return function (key) {
        var result = address.match(new RegExp("(\\?|\\&)" + key + "=([^\\&]+)"));
        return result ? result[2] : null;
    };
}
var parseUrlByHash = parser(window.location.hash);
var parseUrlBySearch = parser(window.location.search);
var parseUrl = (function (address, key) { return parser(address)(key); });

export default parseUrl;
export { parseUrlByHash, parseUrlBySearch };
