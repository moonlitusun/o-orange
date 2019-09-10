import { stringNumber } from './helper/types';
/**
 * Convert numbers to fixed
 *
 * @categry Finace
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
declare function toFixed(num?: stringNumber, length?: number, replace?: string): string;
export default toFixed;
