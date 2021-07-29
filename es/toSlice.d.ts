/**
 * Slice decimal
 *
 * @categry Finace
 * @since 3.0.3
 * @param {number} num The number to convert
 * @param {number} [sliceLen = 2] The length to slice
 * @param {Object} [option = {}]
 * @returns {string}
 * @example
 *
 * toSlice(1.63456461, 2)
 * // => 1.63
 *
 * toSlice(1.63456461, 3)
 * // => 1.634
 *
 * toSlice(1, 2)
 * // => 1.00
 *
 */
declare function toSlice(num?: number, sliceLen?: number): string;
export default toSlice;
