/**
 * @since 3.1.0
 * @category Finace
 * @param {number | string} value The value to check.
 * @returns {boolean}
 * @Examples
 *
 * isTrue(false)
 * // => false
 *
 * isTrue(0)
 * // => true
 *
 */
 function isTrue(value: number | string): boolean {
  return !!(value) || value === 0;
}

export default isTrue;
