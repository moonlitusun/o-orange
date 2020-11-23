(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.isFalseNotZero = factory());
}(this, (function () { 'use strict';

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

  return isFalseNotZero;

})));
