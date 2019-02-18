/**
 * curry
 *
 * @categoty Util
 * @since 2.0.1
 * @param {Function} fn The function to be executed
 * @param args fn argument
 * @returns {Function}
 * @example
 * 
 * function sum(a, b, c) {
 *  return a + b + c;
 * }
 * 
 * function multiply(a, b, c, d) {
 *  return a * b * c * d;
 * }
 * 
 * const sumCurry = curry(sum)(1);
 * const multiplyCurry = curry(multiply)(2);
 * 
 * sumCurry(4)(5)
 * // => 10
 * 
 * multiplyCurry(3)(4)(5)
 * // => 120
 * 
 */
function curry(fn: Function, ...args): Function {
  const len: number = fn.length;

  return function(...rest) {
    const params: Array<any> = [].concat(...args, ...rest);

    if (params.length < len) {
      return curry.call(this, fn, params)
    } else {
      return fn.apply(this, params);
    }
  }
}

export default curry;