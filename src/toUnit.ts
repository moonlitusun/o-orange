import orange from './orange';
import toFixed from './toFixed';
import { toNumber } from './utils';

import getUnit, { type GetUnitOptions, Unit } from "./getUnit";
import { isUndefined } from ".";

interface ToUnitOptions extends GetUnitOptions {
  unit?: Unit;
}

/**
 *
 * Convert value to English units, like 1B 1M 1K
 *
 * @since 2.1.0
 *
 */
function toUnit(num: number | string, options: ToUnitOptions = {}): string {
  const { lanType = orange.lang, unit: _unit, ...rest } = options;

  const {
    placeholder = orange.placeholder,
    ignoreIntegerPrecision = true,
  } = rest;

  const pureNum: number = toNumber(num);

  if (isNaN(pureNum)) return placeholder;

  const numAbs: number = Math.abs(+num);
  const unit = isUndefined(_unit) ? getUnit(num, options) : _unit;
  const toFixedParams = {
    ignoreIntegerPrecision,
    ...rest,
  };
  if (!unit) {
    return toFixed(num, toFixedParams);
  }

  const { label, value } = unit;
  return `${pureNum < 0 ? '-' : ''}${toFixed(
    numAbs / value,
    toFixedParams
  )}${label}`;
}

export default toUnit;
