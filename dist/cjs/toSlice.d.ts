interface IOption {
    placeholder?: string;
    precision?: number;
    ignoreIntegerPrecision?: boolean;
}
/**
 * Slice decimal
 *
 * @since 3.0.3
 * @param {number} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to slice
 * @param {boolean} [option.ignoreIntegerPrecision = false] if target is inter, ignore toFixed
 * @returns {string}
 * @Examples
 *
 */
declare function toSlice(num: number | string, option?: IOption): string;
export default toSlice;
