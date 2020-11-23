(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.isUndefined = factory());
}(this, (function () { 'use strict';

  /**
   * @since 0.0.1
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean}
   * @example
   *
   * isUndefined(undefined)
   * // => true
   *
   * isObject([0, 1, 2, 3])
   * // => false
   *
   */
  function isUndefined(value) {
    return value === void 0;
  }

  return isUndefined;

})));
