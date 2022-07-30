import isTrue from './isTrue';
import { DEFAULT_PLACEHOLDER } from './constant/default';

/**
 * @since 2.1.3
 * @param {string | number} num The value to convert.
 * @returns {T}
 * @Examples
 *
 * toPlaceholder(1)
 * // => 1
 *
 * toPlaceholder(0)
 * // => '--'
 *
 */
function toPlaceholder(num: any): any {
  return isTrue(num) ? num : DEFAULT_PLACEHOLDER;
}

export default toPlaceholder;
