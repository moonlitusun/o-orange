import { DEFAULT_PLACEHOLDER } from './constant/default';
import isUndefined from './isUndefined';

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
 * ensure(0, )
 *
 */
function ensure<T, N>(
  value: any,
  failureCallback?: string | (() => T),
  successCallback?: string | (() => N)
): string | T | N {
  if (!value) {
    if (failureCallback === null || isUndefined(failureCallback)) return DEFAULT_PLACEHOLDER;

    return typeof failureCallback === 'function' ? failureCallback() : failureCallback;
  }

  if (isUndefined(successCallback)) return value;

  return typeof successCallback === 'function' ? successCallback() : successCallback;
}

export default ensure;
