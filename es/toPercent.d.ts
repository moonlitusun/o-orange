interface IOption {
    placeholder?: string;
    precision?: number;
    multiply?: number;
}
/**
 * Convert numbers to percentage
 *
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @param {number} [option.multiply = 1]
 * @returns {string}
 *
 */
declare function toPercent(num?: number, option?: IOption): string;
export default toPercent;
