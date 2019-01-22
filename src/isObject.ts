/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 */
function isObject(value: any): boolean {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}

export default isObject;