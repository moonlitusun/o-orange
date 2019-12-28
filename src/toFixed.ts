import { DEFAULT_FIXED_LEN, DEFAULT_PLACEHOLDER } from './constant/default';

import { stringNumber } from './types/common/type';
import { IOption } from './types/toFixed';

/**
 * Convert numbers to fixed
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {number} [fixedLen = 2] The length to Keep
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
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
function toFixed(
  num: stringNumber = 0,
  fixedLen: number = DEFAULT_FIXED_LEN,
  option: IOption = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER } = option;
  const pureNum: number = Number(num);

  if (Number.isNaN(pureNum)) return placeholder;

  return pureNum.toFixed(fixedLen);
}

export default toFixed;
