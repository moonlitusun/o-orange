(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.toPlaceholderNotZero = factory());
}(this, (function () { 'use strict';

  var DEFAULT_PLACEHOLDER = '--';

  /**
   * @since 2.1.3
   * @category Finace
   * @param {*} value The value to check.
   * @returns {boolean}
   * @example
   *
   * isFalseNotZero(false)
   * // => true
   *
   * isFalseNotZero(0)
   * // => true
   *
   */
  function isFalseNotZero(value) {
    return !value && value !== 0;
  }

  /**
   * @since 2.1.3
   * @category Finace
   * @param {*} value The value to convert.
   * @returns {any}
   * @example
   *
   * toPlaceholderNotZero(1)
   * // => 1
   *
   * toPlaceholder(0)
   * // => 0
   *
   * toPlaceholder(undefined)
   * // => '--'
   *
   */

  function toPlaceholderNotZero(value) {
    return isFalseNotZero(value) ? DEFAULT_PLACEHOLDER : value;
  }

  return toPlaceholderNotZero;

})));
