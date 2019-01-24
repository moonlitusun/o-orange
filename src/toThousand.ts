/**
 * Convert numbers to thousands of digits
 *
 * @categry Number
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {string} [sign = ','] Splitter
 * @returns  string}
 * @example
 *
 * toThousand(11345)
 * // => 11,345
 *
 * toThousand(11345.2345, ' ')
 * // => 11 345.2345
 *
 */
function toThousand(num: number = 0, sign: string = ','): string {
  let [integer, decimals] = num.toString().split('.');

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
  return decimals ? `${integer}.${decimals}` : integer;
}

export default toThousand;