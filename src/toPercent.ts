import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';

import toFixed from './toFixed';
import { IOption } from './types/toPercent';

interface IToPercentOptions extends IOption {
  multiply?: number;
}

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
 *
 */
function toPercent(
  num: number = 0,
  
  option: IToPercentOptions = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER, multiply = 1, precision = DEFAULT_PRECISION, } = option;
  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  return `${toFixed(multiply * num, precision)}%`;
}

export default toPercent;
