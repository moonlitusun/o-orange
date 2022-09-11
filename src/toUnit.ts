import toFixed, { IToFixedOption } from './toFixed';
import { DEFAULT_PRECISION, DEFAULT_PLACEHOLDER } from './constant/default';

export interface IUnit {
  label: string;
  value: number;
}

export enum UNIT_LAN {
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',
  EN_US = 'en-US'
}

export interface IOptions extends IToFixedOption {
  lanType?: UNIT_LAN;
}

const unitDict: Record<UNIT_LAN, IUnit[]> = {
  [UNIT_LAN.EN_US]: [
    { value: Math.pow(10, 12), label: 'T' },
    { value: Math.pow(10, 9), label: 'B' },
    { value: Math.pow(10, 6), label: 'M' },
    { value: Math.pow(10, 3), label: 'K' },
  ],
  [UNIT_LAN.ZH_CN]: [
    { value: Math.pow(10, 12), label: '万亿' },
    { value: Math.pow(10, 8), label: '亿' },
    { value: Math.pow(10, 4), label: '万' },
  ],
  [UNIT_LAN.ZH_TW]: [
    { value: Math.pow(10, 12), label: '萬億' },
    { value: Math.pow(10, 8), label: '億' },
    { value: Math.pow(10, 4), label: '萬' },
  ],
};

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
function toUnit(num: number | string = 0, options: IOptions = {}): string {
  const {
    lanType = UNIT_LAN.EN_US,
    placeholder = DEFAULT_PLACEHOLDER,
    precision = DEFAULT_PRECISION,
    ignoreIntegerPrecision = true,
  } = options;
  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  const unit: IUnit[] = unitDict[lanType] || unitDict[UNIT_LAN.EN_US];
  const unitLen: number = unit.length;
  const numAbs: number = Math.abs(+num);
  let result = '';
  const toFixedParams = {
    placeholder,
    precision,
    ignoreIntegerPrecision,
  };

  if (numAbs < unit[unitLen - 1].value) return toFixed(num, toFixedParams);

  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];

    if (numAbs >= value) {
      result = `${num < 0 ? '-' : ''}${toFixed(
        numAbs / value,
        toFixedParams
      )}${label}`;
      break;
    }
  }

  return result;
}

export default toUnit;
