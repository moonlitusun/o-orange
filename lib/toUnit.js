import { D as DEFAULT_FIXED_LEN, a as DEFAULT_PLACEHOLDER } from './default-3d477887.js';
import toFixed from './toFixed.js';

var unitDict = {
    1: [
        { value: Math.pow(10, 12), label: 'T' },
        { value: Math.pow(10, 9), label: 'B' },
        { value: Math.pow(10, 6), label: 'M' },
        { value: Math.pow(10, 3), label: 'K' },
    ],
    2: [
        { value: Math.pow(10, 12), label: '万亿' },
        { value: Math.pow(10, 11), label: '千亿' },
        { value: Math.pow(10, 10), label: '百亿' },
        { value: Math.pow(10, 8), label: '亿' },
        { value: Math.pow(10, 7), label: '千万' },
        { value: Math.pow(10, 6), label: '百万' },
        { value: Math.pow(10, 4), label: '万' },
    ],
    3: [
        { value: Math.pow(10, 12), label: '萬億' },
        { value: Math.pow(10, 11), label: '千億' },
        { value: Math.pow(10, 10), label: '百億' },
        { value: Math.pow(10, 8), label: '億' },
        { value: Math.pow(10, 7), label: '千萬' },
        { value: Math.pow(10, 6), label: '百萬' },
        { value: Math.pow(10, 4), label: '萬' },
    ]
};
/**
 *
 * Convert value to English units, like 1B 1M 1K
 *
 * @since 2.1.0
 * @param {number} num The number to convert
 * @param {number} [fixedLen] The length to Keep
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when num is NaN or not number
 * @param {1 | 2 | 3} [option.type = 1] Unit 1 => en-us | 2 => zh-cn | 2 => zh-hk
 * @returns {string}
 * @example
 *
 * toUnit(100800, 3, { type: 1 })
 * // 100.800K
 *
 * toUnit(10083342800, 2, { type: 3 })
 * // 1.01百億
 *
 */
function toUnit(num, fixedLen, option) {
    if (num === void 0) { num = 0; }
    if (fixedLen === void 0) { fixedLen = DEFAULT_FIXED_LEN; }
    if (option === void 0) { option = {}; }
    var _a = option.type, type = _a === void 0 ? 1 : _a, _b = option.placeholder, placeholder = _b === void 0 ? DEFAULT_PLACEHOLDER : _b;
    var pureNum = Number(num);
    if (isNaN(pureNum))
        return placeholder;
    var unit = unitDict[type];
    var unitLen = unit.length;
    var numAbs = Math.abs(num);
    var result = '';
    if (numAbs < unit[unitLen - 1].value)
        return toFixed(num, fixedLen, { placeholder: placeholder });
    for (var i = 0; i < unitLen; i++) {
        var _c = unit[i], label = _c.label, value = _c.value;
        if (numAbs >= value) {
            result = "" + (num < 0 ? '-' : '') + toFixed((numAbs / value), fixedLen, { placeholder: placeholder }) + label;
            break;
        }
    }
    return result;
}

export default toUnit;
export { toUnit };
