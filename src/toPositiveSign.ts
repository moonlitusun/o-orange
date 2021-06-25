import { stringNumber } from './types/common/type';

/**
 * Convert numbers to positive and negative signs
 *
 * @categry Finace
 * @since 2.1.0
 * @param {number} num The number to convert
 * @param {boolean} [isContainZero = false] Whether contain zero
 * @returns {string}
 * @example
 *
 * toPositiveSign(15)
 * // => +15
 *
 * toThousand(-15)
 * // => -15
 *
 */
function toPositiveSign(
  target: stringNumber,
  balance = 0,
  canEqual = false,
): stringNumber {
  const isMoreThan = canEqual ? target >= balance : target > balance;

  return isMoreThan ? `+${target}` : target;
}

export default toPositiveSign;
