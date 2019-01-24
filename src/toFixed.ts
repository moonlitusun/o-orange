import isNumber from './isNumber';

/**
 * Convert numbers to fixed
 * 
 * @categry Number
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {number} [length = 2] The length to Keep
 * @param {string} [replace = '---'] Replace string when targetNum is NaN or not number
 * @returns {string}
 * @example
 * 
 * toFixed(1.2345, 2)
 * // => 1.23
 * 
 * toFixed('none', 2)
 * // => '---'
 * 
 * toFixed(NaN, 2, 'xxxx')
 * // => 'xxxx'
 * 
 */
function toFixed(num: number = 0, length: number = 2, replace: string = '---'): string {
  if (!isNumber(num) || isNaN(num)) return replace;

  return num.toFixed(length);
}

export default toFixed;