var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/parseUrl.ts
var parseUrl_exports = {};
__export(parseUrl_exports, {
  default: () => parseUrl_default,
  parseUrlByHash: () => parseUrlByHash,
  parseUrlBySearch: () => parseUrlBySearch
});
module.exports = __toCommonJS(parseUrl_exports);
function parser(address) {
  return function(key) {
    const result = address.match(new RegExp(`(\\?|\\&)${key}=([^\\&]+)`));
    return result ? result[2] : null;
  };
}
var parseUrlByHash = parser(window.location.hash);
var parseUrlBySearch = parser(window.location.search);
var parseUrl_default = (address, key) => parser(address)(key);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  parseUrlByHash,
  parseUrlBySearch
});
