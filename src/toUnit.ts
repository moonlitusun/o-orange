import toFixed, { IToFixedOption } from './toFixed';
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';

export interface IUnit {
  label: string;
  value: number;
}

export interface IUnitDict {
  1: IUnit[];
  2: IUnit[];
  3: IUnit[];
}

export interface IOption extends IToFixedOption {
  type?: number;
}


const unitDict: IUnitDict = {
  1: [
    { value: Math.pow(10, 12), label: 'T' },
    { value: Math.pow(10, 9), label: 'B' },
    { value: Math.pow(10, 6), label: 'M' },
    { value: Math.pow(10, 3), label: 'K' },
  ],
  2: [
    { value: Math.pow(10, 12), label: '万亿' },
    { value: Math.pow(10, 11), label: '千亿' },
    { value: Math.pow(10, 10), label: '百亿' },
    { value: Math.pow(10, 8), label: '亿' },
    { value: Math.pow(10, 7), label: '千万' },
    { value: Math.pow(10, 6), label: '百万' },
    { value: Math.pow(10, 4), label: '万' },
  ],
  3: [
    { value: Math.pow(10, 12), label: '萬億' },
    { value: Math.pow(10, 11), label: '千億' },
    { value: Math.pow(10, 10), label: '百億' },
    { value: Math.pow(10, 8), label: '億' },
    { value: Math.pow(10, 7), label: '千萬' },
    { value: Math.pow(10, 6), label: '百萬' },
    { value: Math.pow(10, 4), label: '萬' },
  ]
};

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
function toUnit(
  num: number = 0,
  option: IOption = {}
): string {
  const { type = 1, placeholder = DEFAULT_PLACEHOLDER, precision = DEFAULT_PRECISION, ignoreIntegerPrecision = true } = option;
  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  const unit: IUnit[] = unitDict[type];
  const unitLen: number = unit.length;
  const numAbs: number = Math.abs(num);
  let result = '';
  const toFixedParams = { placeholder, precision, ignoreIntegerPrecision: true };

  if (numAbs < unit[unitLen - 1].value) return toFixed(num, toFixedParams);

  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];

    if (numAbs >= value) {
      result = `${num < 0 ? '-' : ''}${toFixed((numAbs / value), toFixedParams)}${label}`;
      break;
    }
  }

  return result;
}

export default toUnit;
