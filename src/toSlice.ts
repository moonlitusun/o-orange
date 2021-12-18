import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';
import isTrue from './isTrue';

interface IOption {
  placeholder?: string;
  precision?: number;
}

/**
 * Slice decimal
 *
 * @categry Finace
 * @since 3.0.3
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to slice
 * @returns {string}
 * @example
 *
 */
function toSlice(
  num: number = 0,
  option: IOption = {},
): string {
  const { placeholder = DEFAULT_PLACEHOLDER, precision = DEFAULT_PRECISION } = option;

  if (!isTrue(num)) return placeholder;
  const multiple = Math.pow(10, precision);
  return  (parseInt(String(num * multiple), 10) / multiple).toFixed(precision);
}

export default toSlice;
