import { IToFixedOption } from './toFixed';
export interface IUnit {
    label: string;
    value: number;
}
export declare enum UNIT_LAN {
    'cn' = "zh-CN",
    'tw' = "zh-TW",
    'us' = "en-US"
}
export interface IOptions extends IToFixedOption {
    lanType?: UNIT_LAN;
}
/**
 *
 * Convert value to English units, like 1B 1M 1K
 *
 * @since 2.1.0
 * @param {number | string} num The number to convert
 * @param {Object} [option = {}]
 * @param {string} [option.placeholder = '--'] Replace string when targetNum is NaN or not number
 * @param {number} [option.precision = 2] The length to Keep
 * @param {boolean} [option.ignoreIntegerPrecision = false] if target is inter, ignore toFixed
 * @param {UNIT_LAN} [option.lanType = en-US] Unit 1 => en-US | 2 => zh-CN | 2 => zh-TW
 * @returns {string}
 * @Examples
 *
 * toUnit(100800, 3, { type: 1 })
 * // 100.800K
 *
 */
declare function toUnit(num?: number, options?: IOptions): string;
export default toUnit;
