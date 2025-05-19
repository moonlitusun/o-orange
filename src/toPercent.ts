import orange from './orange';
import toFixed from './toFixed';
import { ToFixedOption } from './toFixed';
import { toNumber } from './utils';

interface toPercentOption extends ToFixedOption {
  multiply?: number;
}

/**
 * Convert numbers to percentage
 *
 * @since 0.0.1
 *
 *
 */
function toPercent(num: number, option: toPercentOption = {}): string {
  const { multiply = 1, ...rest } = option;
  const { placeholder = orange.placeholder } = rest;
  const pureNum = toNumber(num);

  if (isNaN(pureNum)) return placeholder;

  return `${toFixed(multiply * num, {
    ignoreIntegerPrecision: false,
    ...rest,
  })}%`;
}

export default toPercent;
