import { stringNumber } from './types/common/type';
interface IOption {
    balance?: number;
    canEqual?: boolean;
    placeholder?: string;
}
/**
 * Convert numbers to positive and negative signs
 *
 * @categry Finace
 * @since 2.1.0
 * @param {number} num The number to convert
 * @param {boolean} [isContainZero = false] Whether contain zero
 * @returns {string}
 * @example
 *
 */
declare function toPositiveSign(target: stringNumber, option?: IOption): string;
export default toPositiveSign;
