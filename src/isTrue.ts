/**
 * @since 3.1.0
 * @category Finace
 * @param {*} value The value to check.
 * @returns {boolean}
 * @example
 *
 * isTrue(false)
 * // => false
 *
 * isTrue(0)
 * // => true
 *
 */
 function isTrue(value: any): boolean {
  return value || value === 0;
}

export default isTrue;
