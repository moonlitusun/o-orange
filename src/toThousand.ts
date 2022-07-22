import { stringNumber } from './types/common/type';

/**
 * Convert numbers to thousands of digits
 *
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {string} [sign = ','] Splitter
 * @returns {string}
 * @Examples
 *
 * toThousand(11345)
 * // => 11,345
 *
 * toThousand(11345.2345, ' ')
 * // => 11 345.2345
 *
 */
function toThousand(num: stringNumber = 0, sign: string = ','): string {
  const [integer, decimals]: string[] = num.toString().split('.');

  const thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${thousandInteger}.${decimals}` : thousandInteger;
}

export default toThousand;
