/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 * @example
 * 
 * isArray([])
 */
function isArray(value: any): boolean {
  return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]';
}

export default isArray;