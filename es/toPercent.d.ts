interface IOption {
    placeholder?: string;
    precision?: number;
    multiply?: number;
}
/**
 * Convert numbers to percentage
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @returns {string}
 *
 */
declare function toPercent(num?: number, option?: IOption): string;
export default toPercent;
