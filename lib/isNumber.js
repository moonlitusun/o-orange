/**
 * @since 0.0.1
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean}
 * @example
 *
 * isNumber(0)
 * // => true
 *
 * isNumber('0')
 * // => false
 *
 */
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

export default isNumber;
