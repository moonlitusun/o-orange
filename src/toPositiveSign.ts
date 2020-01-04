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
  num: number = 0,
  isContainZero: boolean = false,
): stringNumber {
  const pureNum: number = Number(num);

  if (Number.isNaN(pureNum)) return String(num);

  if (isContainZero) {
    return pureNum >= 0 ? `+${pureNum}` : String(pureNum);
  }

  return pureNum > 0 ? `+${pureNum}` : String(pureNum);
}

export default toPositiveSign;
