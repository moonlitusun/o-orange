export interface IUnit {
    label: string;
    value: number;
}
export interface IUnitDict {
    1: IUnit[];
    2: IUnit[];
    3: IUnit[];
}
export interface IOption {
    precision?: number;
    type?: number;
    placeholder?: string;
}
/**
 *
 * Convert value to English units, like 1B 1M 1K
 *
 * @since 2.1.0
 * @param {number} num The number to convert
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
declare function toUnit(num?: number, option?: IOption): string;
export default toUnit;
