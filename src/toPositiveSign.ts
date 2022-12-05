import { DEFAULT_PLACEHOLDER } from './constant/default';
import { stringNumber } from './types/common/type';
import isTrue from './isTrue';
interface IOption {
  balance?: number;
  canEqual?: boolean;
  placeholder?: string;
  parseFloat?: boolean;
}

/**
 * Convert numbers to positive and negative signs
 *
 * @categry Finace
 * @since 2.1.0
 * @param {number} num The number to convert
 * @param {boolean} [isContainZero = false] Whether contain zero
 * @returns {string}
 * @Examples
 *
 */
function toPositiveSign<T extends stringNumber>(
  target: T,
  option: IOption = {},
): string {
  const { canEqual = false, balance = 0, placeholder = DEFAULT_PLACEHOLDER, parseFloat = true } = option;
  const parserTarget = parseFloat ? Number.parseFloat(target as string) : target;
  if (!isTrue(target)) return placeholder;
  const isMoreThan = canEqual ? parserTarget >= balance : parserTarget > balance;

  return isMoreThan ? `+${target}` : target.toString();
}

export default toPositiveSign;
