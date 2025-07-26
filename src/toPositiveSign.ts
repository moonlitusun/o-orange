import orange from './orange';
import { NormalTarget } from './types/common/type';
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
 * @since 2.1.0
 *
 */
function toPositiveSign<T extends NormalTarget>(
  target: T,
  option: IOption = {},
): string {
  const { canEqual = false, balance = 0, placeholder = orange.placeholder, parseFloat = true } = option;
  const parserTarget: number = parseFloat ? Number.parseFloat(target as string) : Number(target);
  if (!isTrue(target)) return placeholder;
  const isMoreThan = canEqual ? parserTarget >= balance : parserTarget > balance;

  return isMoreThan ? `+${target}` : target.toString();
}

export default toPositiveSign;
