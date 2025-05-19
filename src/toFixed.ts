import Big from 'big.js';
import isTrue from './isTrue';
import { stringNumber } from './types/common/type';
import orange, { RoundingMode } from './orange';
import { toNumber } from './utils';

export interface ToFixedOption {
  placeholder?: string;
  precision?: number;
  ignoreIntegerPrecision?: boolean;
  RM?: RoundingMode;
}

/**
 * Convert numbers to fixed
 *
 * @since 0.0.1
 *
 *
 */
function toFixed(num: stringNumber, option: ToFixedOption = {}): string {
  const {
    placeholder = orange.placeholder,
    precision = orange.precision,
    ignoreIntegerPrecision = orange.ignoreIntegerPrecision,
    RM = orange.RM,
  } = option;
  if (!isTrue(num)) return placeholder;
  const pureNum = toNumber(num);

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
