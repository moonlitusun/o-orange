import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';
import Big from 'big.js';
import toFixed from './toFixed';
import isTrue from './isTrue';
import { RoundingMode } from './orange';

interface IOption {
  placeholder?: string;
  precision?: number;
  ignoreIntegerPrecision?: boolean;
}

/**
 * Slice decimal
 *
 * @since 3.0.3
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to slice
 * @param {boolean} [option.ignoreIntegerPrecision = false] if target is inter, ignore toFixed
 * @returns {string}
 * @Examples
 *
 */
function toSlice(
  num: number | string,
  option: IOption = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER, precision = DEFAULT_PRECISION, ignoreIntegerPrecision = false } = option;
  if (!isTrue(num)) return placeholder;
  const pureNum = Number(num);

  if (isNaN(pureNum)) return placeholder;

  if (ignoreIntegerPrecision && Number.parseFloat(pureNum.toString()) === Number.parseInt(pureNum.toString())) {
    return pureNum.toString();
  }

  const multiple = Math.pow(10, precision);
  
  return toFixed((Big(pureNum).mul(multiple).div(multiple)), { precision, RM: RoundingMode.roundDown });
}

export default toSlice;
