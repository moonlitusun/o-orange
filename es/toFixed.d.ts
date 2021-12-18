import { stringNumber } from './types/common/type';
interface IOption {
    placeholder?: string;
    precision?: number;
}
/**
 * Convert numbers to fixed
 *
 * @categry Finace
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @returns {string}
 * @example
 *
 */
declare function toFixed(num?: stringNumber, option?: IOption): string;
export default toFixed;
