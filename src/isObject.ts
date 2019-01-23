/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 * @example
 * 
 * isObject({a: 1, b: 2})
 * // => true
 * 
 * isObject([0, 1, 2, 3])
 * // => false
 * 
 */
function isObject(value: any): boolean {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}

export default isObject;