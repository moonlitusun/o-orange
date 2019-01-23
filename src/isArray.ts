/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 * @example
 * 
 * isArray([0, 1, 2, 3])
 * // => true
 * 
 * isArray({a: 1, b: 2})
 * // => false
 * 
 * isArray(1)
 * // => false
 * 
 */
function isArray(value: any): boolean {
  return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]';
}

export default isArray;