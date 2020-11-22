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
function pagination(array, pageNum, pageSize) {
    if (pageNum === void 0) { pageNum = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    var beginIndex = (pageNum - 1) * pageSize;
    var endIndex = pageNum * pageSize;
    return array.slice(beginIndex, endIndex);
}

export default pagination;
