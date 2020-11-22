/**
 * @since 2.1.3
 * @category Finace
 * @param {*} value The value to convert.
 * @returns {any}
 * @example
 *
 * toPlaceholderNotZero(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => 0
 *
 * toPlaceholder(undefined)
 * // => '--'
 *
 */
declare function toPlaceholderNotZero(value: any): any;
export default toPlaceholderNotZero;
