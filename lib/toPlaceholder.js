import { a as DEFAULT_PLACEHOLDER } from './default-3d477887.js';

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
function toPlaceholder(value) {
    return value || DEFAULT_PLACEHOLDER;
}

export default toPlaceholder;
