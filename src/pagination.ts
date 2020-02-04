/**
 * Cut the array
 *
 * @category Array
 * @since 0.0.1
 * @param {Array} array The array to execute
 * @param {number} [pageNum = 1] Current page number(Calculate the page number from the back when it is negative)
 * @param {number} [pageSize = 10] One page of size
 * @returns {Array}
 * @example
 *
 * pagination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 8)
 * // => [9, 10]
 *
 * pagination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 3)
 * // => [7, 8, 9]
 *
 */
function pagination<T>(array: T[], pageNum: number = 1, pageSize: number = 10): T[] {
  const beginIndex: number = (pageNum - 1) * pageSize;
  const endIndex: number = pageNum * pageSize;

  return array.slice(beginIndex, endIndex);
}

export default pagination;
