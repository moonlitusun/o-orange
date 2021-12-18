import { IOption } from './types/toPercent';
interface IToPercentOptions extends IOption {
    multiply?: number;
}
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
 *
 */
declare function toPercent(num?: number, fixedLen?: number, option?: IToPercentOptions): string;
export default toPercent;
