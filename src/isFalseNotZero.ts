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
function isFalseNotZero(value: any): boolean {
  return !value && value !== 0;
}

export default isFalseNotZero;
