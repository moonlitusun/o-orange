import orange from './orange';
import isUndefined from './isUndefined';
import isTrue from './isTrue';

/**
 * @since 3.1.0
 * @category Finace
 * @param {*} value Ensure the value is valid.
 * @param {string | Function} failureCallback failureCallback.
 * @param {string | Function} successCallback successCallback.
 * @returns {string}
 * @Examples
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
  if (!isTrue(value)) {
    if (failureCallback === null || isUndefined(failureCallback))
      return orange.placeholder;

    return typeof failureCallback === 'function'
      ? failureCallback()
      : failureCallback;
  }

  if (isUndefined(successCallback)) return value;

  return typeof successCallback === 'function'
    ? successCallback()
    : successCallback;
}

export default ensure;
