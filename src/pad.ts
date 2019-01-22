/**
 * Fill the number to the specified length
 * 
 * @since 0.0.1
 * @param {number} value The number to convert
 * @param {number} [length = 2] The length to limit
 * @returns {string}
 * @example
 * 
 * 
 */
function pad(value: number = 0, length?: number): string {
  const len = Math.max(0, length);

  return value < 10 * (len - 1) ? `${'0'.repeat(len - 1)}${value}` : value.toString();
}

export default pad;

