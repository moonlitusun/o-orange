/**
 * @since 2.1.3
 * @category Finace
 * @param {*} value The value to convert.
 * @returns {any}
 * @example
 *
 * toPlaceholder(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => '--'
 *
 */
declare function toPlaceholder<T>(value: any): T | string;
export default toPlaceholder;
