import orange, { Lang } from './orange';
import toFixed, { ToFixedOption } from './toFixed';

export interface Unit {
  label: string;
  value: number;
}

export interface toUnitOptions extends ToFixedOption {
  lanType?: Lang;
}

const unitDict: Record<Lang, Unit[]> = {
  [Lang.EN_US]: [
    { value: Math.pow(10, 12), label: 'T' },
    { value: Math.pow(10, 9), label: 'B' },
    { value: Math.pow(10, 6), label: 'M' },
    { value: Math.pow(10, 3), label: 'K' },
  ],
  [Lang.ZH_CN]: [
    { value: Math.pow(10, 12), label: '万亿' },
    { value: Math.pow(10, 8), label: '亿' },
    { value: Math.pow(10, 4), label: '万' },
  ],
  [Lang.ZH_TW]: [
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
 *
 */
function toUnit(num: number | string, options: toUnitOptions = {}): string {
  const { lanType = orange.lang, ...rest } = options;

  const {
    placeholder = orange.placeholder,
    ignoreIntegerPrecision = true,
  } = rest;

  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  const unit: Unit[] = unitDict[lanType] || unitDict[Lang.EN_US];
  const unitLen: number = unit.length;
  const numAbs: number = Math.abs(+num);
  let result = '';
  const toFixedParams = {
    ignoreIntegerPrecision,
    ...rest,
  };

  if (numAbs < unit[unitLen - 1].value) return toFixed(num, toFixedParams);

  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];

    if (numAbs >= value) {
      result = `${pureNum < 0 ? '-' : ''}${toFixed(
        numAbs / value,
        toFixedParams
      )}${label}`;
      break;
    }
  }

  return result;
}

export default toUnit;
