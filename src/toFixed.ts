import Big from 'big.js';
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';
import isTrue from './isTrue';
import { stringNumber } from './types/common/type';
import Orange, { RoundingMode } from './orange';

export interface IToFixedOption {
  placeholder?: string;
  precision?: number;
  ignoreIntegerPrecision?: boolean;
  RM?: RoundingMode;
}

/**
 * Convert numbers to fixed
 *
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @param {boolean} [option.ignoreIntegerPrecision = false] if target is inter, ignore toFixed
 * @param {boolean} [option.RM = RoundingMode.roundHalfEven] RoundingMode
 * @returns {string}
 * @Examples
 *
 */
function toFixed(num: stringNumber, option: IToFixedOption = {}): string {
  const {
    placeholder = DEFAULT_PLACEHOLDER,
    precision = DEFAULT_PRECISION,
    ignoreIntegerPrecision = false,
    RM = Orange.RM,
  } = option;
  if (!isTrue(num)) return placeholder;
  const pureNum = Number(num);

  if (isNaN(pureNum) || !isFinite(pureNum)) return placeholder;

  if (
    ignoreIntegerPrecision &&
    Number.parseFloat(pureNum.toString()) ===
      Number.parseInt(pureNum.toString())
  ) {
    return String(num);
  }

  return new Big(Number(pureNum)).toFixed(precision, RM);
}

export default toFixed;
