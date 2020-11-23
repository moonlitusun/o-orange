(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.toPlaceholder = factory());
}(this, (function () { 'use strict';

  var DEFAULT_PLACEHOLDER = '--';

  /**
   * @since 2.1.3
   * @category Finace
   * @param {*} value The value to convert.
   * @returns {any}
   * @example
   *
   * toPlaceholder(1)
   * // => 1
   *
   * toPlaceholder(0)
   * // => '--'
   *
   */

  function toPlaceholder(value) {
    return value || DEFAULT_PLACEHOLDER;
  }

  return toPlaceholder;

})));
