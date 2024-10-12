import orange, { Lang } from './orange';
import { ToFixedOption } from './toFixed';
import { toNumber } from './utils';

const emptyUnit: Unit = { label: '', value: 1 };

export interface Unit {
  label: string;
  value: number;
}

export interface GetUnitOptions extends ToFixedOption {
  lanType?: Lang;
}

export const unitDict: Record<Lang, Unit[]> = {
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
 * get value's unit, like 1B 1M 1K
 *
 * @since 4.4.0
 *
 */
function getUnit(num: number | string, options: GetUnitOptions = {}): Unit {
  const { lanType = orange.lang } = options;

  const pureNum: number = toNumber(num);

  if (isNaN(pureNum)) return emptyUnit;

  const unit: Unit[] = unitDict[lanType] || unitDict[Lang.EN_US];
  const unitLen: number = unit.length;
  const numAbs: number = Math.abs(+num);
  let result: Unit = emptyUnit;

  if (numAbs < unit[unitLen - 1].value) return emptyUnit;

  for (let i = 0; i < unitLen; i++) {
    const { label, value } = unit[i];

    if (numAbs >= value) {
      result = { label, value };
      break;
    }
  }

  return result;
}

export default getUnit;
