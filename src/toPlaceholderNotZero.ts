import { DEFAULT_PLACEHOLDER } from './constant/default';
import isTrue from './isTrue';

/**
 * @since 2.1.3
 * @category Finace
 * @param {*} value The value to convert.
 * @returns {any}
 * @example
 *
 * toPlaceholderNotZero(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => 0
 *
 * toPlaceholder(undefined)
 * // => '--'
 *
 */
function toPlaceholderNotZero(value: any): any {
  return !isTrue(value) ? DEFAULT_PLACEHOLDER : value;
}

export default toPlaceholderNotZero;
