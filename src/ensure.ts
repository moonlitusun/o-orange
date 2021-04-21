import { DEFAULT_PLACEHOLDER } from './constant/default';

/**
 * @since 3.1.0
 * @category Finace
 * @param {*} value Ensure the value is valid.
 * @param {string | Function} failureCallback failureCallback.
 * @param {string | Function} successCallback successCallback.
 * @returns {string}
 * @example
 *
 * ensure(0)
 * // => true
 *
 * isArray({a: 1, b: 2})
 * // => false
 *
 * isArray(1)
 * // => false
 *
 */
function ensure<T, N>(
  value: any,
  failureCallback: string | (() => T),
  successCallback: string | (() => N)
): string | T | N {
  if (!value) {
    if (!failureCallback) return DEFAULT_PLACEHOLDER;

    return typeof failureCallback === 'string' ? failureCallback : failureCallback();
  }

  if (!successCallback) return value;

  return typeof successCallback === 'string' ? successCallback : successCallback();
}

export default ensure;
