// src/parseUrl.ts
function parser(address) {
  return function(key) {
    const result = address.match(new RegExp(`(\\?|\\&)${key}=([^\\&]+)`));
    return result ? result[2] : null;
  };
}
var parseUrlByHash = parser(window.location.hash);
var parseUrlBySearch = parser(window.location.search);
var parseUrl_default = (address, key) => parser(address)(key);
export {
  parseUrl_default as default,
  parseUrlByHash,
  parseUrlBySearch
};
