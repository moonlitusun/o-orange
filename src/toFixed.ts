import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';

import { stringNumber } from './types/common/type';

export interface IToFixedOption {
  placeholder?: string;
  precision?: number;
  ignoreIntegerPrecision?: boolean;
}

/**
 * Convert numbers to fixed
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @returns {string}
 * @example
 *
 */
function toFixed(
  num: stringNumber = 0,
  option: IToFixedOption = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER, precision = DEFAULT_PRECISION, ignoreIntegerPrecision = false } = option;
  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  if (ignoreIntegerPrecision && Number.parseFloat(pureNum.toString()) === Number.parseInt(pureNum.toString())) {
    return num as string;
  }

  return pureNum.toFixed(precision);
}

export default toFixed;
