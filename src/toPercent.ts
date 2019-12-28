import { DEFAULT_FIXED_LEN, DEFAULT_PLACEHOLDER } from './constant/default';

import toFixed from './toFixed';
import { IOption } from './types/toPercent';
/**
 * Convert numbers to percentage
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {number} [fixedLen = 2] The length to Keep
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
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
 * // => '--'
 *
 */
function toPercent(
  num: number = 0,
  fixedLen: number = DEFAULT_FIXED_LEN,
  option: IOption = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER } = option;
  const pureNum: number = Number(num);

  if (Number.isNaN(pureNum)) return placeholder;

  return `${toFixed(100 * num, fixedLen)}%`;
}

export default toPercent;
