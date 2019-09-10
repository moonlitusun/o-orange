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
declare function isObject(value: any): boolean;
export default isObject;
