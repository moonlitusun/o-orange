import { _ as __read } from './tslib.es6-3c42a745.js';

/**
 * Convert numbers to thousands of digits
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {string} [sign = ','] Splitter
 * @returns {string}
 * @example
 *
 * toThousand(11345)
 * // => 11,345
 *
 * toThousand(11345.2345, ' ')
 * // => 11 345.2345
 *
 */
function toThousand(num, sign) {
    if (num === void 0) { num = 0; }
    if (sign === void 0) { sign = ','; }
    var _a = __read(num.toString().split('.'), 2), integer = _a[0], decimals = _a[1];
    var thousandInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
    return decimals ? thousandInteger + "." + decimals : thousandInteger;
}

export default toThousand;
