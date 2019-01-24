import isNumber from './isNumber';
import toFixed from './toFixed';

/**
 * Convert numbers to percentage
 * 
 * @categry Number
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {number} [length = 2] The length to Keep
 * @param {string} [replace = '---'] Replace string when num is NaN or not number
 * @returns {string}
 * @example
 * 
 * toPercent(0.6515)
 * // => 65.15%
 * 
 * toPercent(0.651525, 3)
 * // => 65.153%
 * 
 * toPercent(NaN)
 * // => '---'
 * 
 */
function toPercent(num: number = 0, length: number = 2, replace: string = '---'): string {
  if (!isNumber(num >> 0) || isNaN(num)) return replace;

  return `${toFixed(100 * num, length)}%`;
}

export default toPercent;