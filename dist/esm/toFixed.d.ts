import { stringNumber } from './types/common/type';
import { RoundingMode } from './orange';
export interface IToFixedOption {
    placeholder?: string;
    precision?: number;
    ignoreIntegerPrecision?: boolean;
    RM?: RoundingMode;
}
/**
 * Convert numbers to fixed
 *
 * @since 0.0.1
 * @param {number | string} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @param {boolean} [option.ignoreIntegerPrecision = false] if target is inter, ignore toFixed
 * @param {boolean} [option.RM = RoundingMode.roundHalfEven] RoundingMode
 * @returns {string}
 * @Examples
 *
 */
declare function toFixed(num: stringNumber, option?: IToFixedOption): string;
export default toFixed;
