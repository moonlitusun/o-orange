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
declare function ensure<T, N>(value: any, failureCallback?: string | (() => T), successCallback?: string | (() => N)): string | T | N;
export default ensure;
