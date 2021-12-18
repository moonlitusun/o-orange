interface IOption {
    placeholder?: string;
    precision?: number;
}
/**
 * Slice decimal
 *
 * @categry Finace
 * @since 3.0.3
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to slice
 * @returns {string}
 * @example
 *
 */
declare function toSlice(num?: number, option?: IOption): string;
export default toSlice;
