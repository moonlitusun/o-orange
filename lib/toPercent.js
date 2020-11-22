import { D as DEFAULT_FIXED_LEN, a as DEFAULT_PLACEHOLDER } from './default-3d477887.js';
import toFixed from './toFixed.js';

/**
 * Convert numbers to percentage
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {number} [fixedLen = 2] The length to Keep
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @returns {string}
 * @example
 *
 * toPercent(0.6515)
 * // => 65.15%
 *
 * toPercent(0.651525, 3)
 * // => 65.153%
 *
 * toPercent(NaN)
 * // => '--'
 *
 */
function toPercent(num, fixedLen, option) {
    if (num === void 0) { num = 0; }
    if (fixedLen === void 0) { fixedLen = DEFAULT_FIXED_LEN; }
    if (option === void 0) { option = {}; }
    var _a = option.placeholder, placeholder = _a === void 0 ? DEFAULT_PLACEHOLDER : _a;
    var pureNum = Number(num);
    if (isNaN(pureNum))
        return placeholder;
    return toFixed(100 * num, fixedLen) + "%";
}

export default toPercent;
