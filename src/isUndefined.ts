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
function isUndefined(value: any): boolean {
  return value === void 0;
}

export default isUndefined;
