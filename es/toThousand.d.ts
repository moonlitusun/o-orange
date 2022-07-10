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
declare function toThousand(num?: number, sign?: string): string;
export default toThousand;
