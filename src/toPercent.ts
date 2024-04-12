import orange from "./orange";
import toFixed from './toFixed';

interface IOption {
  placeholder?: string;
  precision?: number;
  multiply?: number;
}

/**
 * Convert numbers to percentage
 *
 * @since 0.0.1
 *
 *
 */
function toPercent(
  num: number,
  option: IOption = {},
): string {
  const { placeholder = orange.placeholder, multiply = 1, precision = orange.precision } = option;
  const pureNum: number = Number(num);

  if (isNaN(pureNum)) return placeholder;

  return `${toFixed(multiply * num, { precision, ignoreIntegerPrecision: false })}%`;
}

export default toPercent;
