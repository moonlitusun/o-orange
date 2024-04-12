import isTrue from './isTrue';
import orange from './orange';

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
  return isTrue(num) ? num : orange.placeholder;
}

export default toPlaceholder;
