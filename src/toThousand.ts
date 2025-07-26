import isTrue from './isTrue';
import orange from './orange';
import { NormalTarget } from './types/common/type';

interface ToThousandOption {
  placeholder?: string;
}
/**
 * Convert numbers to thousands of digits
 *
 * @since 0.0.1
 * 
 */
function toThousand(num: NormalTarget, sign: string = ',', option: ToThousandOption = {}): string {
  const { placeholder = orange.placeholder } = option;
  if (!isTrue(num)) return placeholder;
  const [integer, decimals]: string[] = num.toString().split('.');

  const thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${thousandInteger}.${decimals}` : thousandInteger;
}

export default toThousand;
