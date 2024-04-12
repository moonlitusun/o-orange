import { stringNumber } from './types/common/type';

/**
 * Convert numbers to thousands of digits
 *
 * @since 0.0.1
 * 
 */
function toThousand(num: stringNumber, sign: string = ','): string {
  const [integer, decimals]: string[] = num.toString().split('.');

  const thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${thousandInteger}.${decimals}` : thousandInteger;
}

export default toThousand;
