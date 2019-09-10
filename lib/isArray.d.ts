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
declare function isArray(value: any): boolean;
export default isArray;
