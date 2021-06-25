import { stringNumber } from './types/common/type';

interface IExtraInfo {
  balance?: number;
  canEqual?: boolean;
  parser?: (target: stringNumber) => string;
}

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
  extraInfo: IExtraInfo = {},
): stringNumber {
  const { canEqual = false, balance = 0, parser } = extraInfo;
  const isMoreThan = canEqual ? target >= balance : target > balance;
  if (parser) target = parser(target);

  return isMoreThan ? `+${target}` : target;
}

export default toPositiveSign;
