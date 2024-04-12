import Big from 'big.js';
import toFixed from './toFixed';
import isTrue from './isTrue';
import orange, { RoundingMode } from './orange';

interface IOption {
  placeholder?: string;
  precision?: number;
  ignoreIntegerPrecision?: boolean;
}

/**
 * Slice decimal
 *
 * @since 3.0.3
 *
 */
function toSlice(
  num: number | string,
  option: IOption = {},
): string {
  const { placeholder = orange.placeholder, precision = orange.precision, ignoreIntegerPrecision = false } = option;
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
