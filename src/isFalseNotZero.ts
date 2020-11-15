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
  const numberValue = +value;

  return !numberValue && numberValue !== 0;
}

export default isFalseNotZero;
