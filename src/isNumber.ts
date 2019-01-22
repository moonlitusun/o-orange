/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 */
function isNumber(value: any): boolean {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

export default isNumber;