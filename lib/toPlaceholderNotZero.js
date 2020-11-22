import isFalseNotZero from './isFalseNotZero.js';
import { a as DEFAULT_PLACEHOLDER } from './default-3d477887.js';

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
function toPlaceholderNotZero(value) {
    return isFalseNotZero(value) ? DEFAULT_PLACEHOLDER : value;
}

export default toPlaceholderNotZero;
