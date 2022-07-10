/**
 * @since 2.1.3
 * @param {string | number} num The value to convert.
 * @returns {T}
 * @Examples
 *
 * toPlaceholder(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => '--'
 *
 */
declare function toPlaceholder(num: string | number): string | number;
export default toPlaceholder;
