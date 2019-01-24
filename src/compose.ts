/**
 * Composes a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @since 2.0.1
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see lodash.flow
 * @example
 *
 * function toUpperCase(str) {
 *  return str.toUpperCase();
 * }
 *
 * function join(x) {
 *  return `hello, ${x}`;
 * }
 *
 * const fn = O.compose([toUpperCase, join]);
 * fn('jacky')
 * // => HELLO, JACKY
 *
 */
function compose(funcs: Function[]): Function {
  const start: number = funcs.length - 1;

  return function(...args) {
    let i: number = start;
    let result: any = funcs[start].apply(this, args);

    while (i--) result = funcs[i].call(this, result);
    return result;
  }
}

export default compose;