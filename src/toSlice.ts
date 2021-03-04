import { DEFAULT_FIXED_LEN } from './constant/default';

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
function toSlice(
  num: number = 0,
  sliceLen: number = DEFAULT_FIXED_LEN,
): string {
  const multiple = Math.pow(10, sliceLen);
  return  (parseInt(String(num * multiple), 10) / multiple).toFixed(sliceLen);
}

export default toSlice;
