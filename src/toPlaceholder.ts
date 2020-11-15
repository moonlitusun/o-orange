import { DEFAULT_PLACEHOLDER } from './constant/default';

/**
 * @since 2.1.3
 * @category Finace
 * @param {*} value The value to convert.
 * @returns {any}
 * @example
 *
 * toPlaceholder(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => '--'
 *
 */
function toPlaceholder<T>(value: any): T | string {
  return value || DEFAULT_PLACEHOLDER;
}

export default toPlaceholder;
