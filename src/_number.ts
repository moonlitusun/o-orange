import isNumber from './isNumber';
import { bind } from './_decorator';

class Number {
  

  /**
   * Convert numbers to thousands of digits
   * 
   * @param { number } targetNum The number to convert
   * @param { string } [sign = ','] Splitter
   * @returns { string }
   * @since 0.0.1
   */
  public convertToThousand(targetNum: number = 0, sign: string = ','): string {
    let [integer, decimals] = targetNum.toString().split('.');

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
    return decimals ? `${integer}.${decimals}` : integer;
  }

  /**
   * Convert numbers to percentage
   * 
   * @param { number } targetNum The number to convert
   * @param { number } [length = 2] The length to Keep
   * @param { string } [replace = '---'] Replace string when targetNum is NaN or not number
   * @returns { string }
   * @since 0.0.1
   */
  @bind()
  public convertToPercent(targetNum: number = 0, length: number = 2, replace: string = '---'): string {
    if (!isNumber(targetNum - 0) || isNaN(targetNum)) return replace;

    return `${this.convertToFixed((targetNum - 0) * 100, length)}%`;
  }

  /**
   * Convert numbers to fixed
   * 
   * @param { number | string } targetNum The number to convert
   * @param { number } [length = 2] The length to Keep
   * @param { string } [replace = '---'] Replace string when targetNum is NaN or not number
   * @returns { string }
   * @since 0.0.1
   */
  public convertToFixed(targetNum: number = 0, length: number = 2, replace: string = '---'): string {
    if (!isNumber(targetNum) || isNaN(targetNum)) return replace;
    
    return targetNum.toFixed(length);
  }
};

const _number = new Number();

export { _number as sss };

export const convertToThousand = _number.convertToThousand;
export const convertToPercent = _number.convertToPercent;
export const convertToFixed = _number.convertToFixed;

export default _number;
