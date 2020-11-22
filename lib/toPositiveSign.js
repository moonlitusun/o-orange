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
function toPositiveSign(num, isContainZero) {
    if (num === void 0) { num = 0; }
    if (isContainZero === void 0) { isContainZero = false; }
    var pureNum = Number(num);
    if (isNaN(pureNum))
        return String(num);
    if (isContainZero) {
        return pureNum >= 0 ? "+" + pureNum : String(pureNum);
    }
    return pureNum > 0 ? "+" + pureNum : String(pureNum);
}

export default toPositiveSign;
