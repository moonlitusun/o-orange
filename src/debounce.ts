/**
 * 
 * @category Util
 * @since 0.0.3
 * @param {Function} func the function to debounce
 * @param {number} [wait=0]
 * The number of milliseconds to delay
 * @param {Object} [options={}] The options object
 * @param {boolean} [options.maxwait]
 * 
 */
function debounce(func: Function, wait: number = 0, options): Function {
  let lastInvokeTime = +new Date();
  let timerId;

  function cancel() {
    clearTimeout(timerId);
  }

  function debounced(...arg) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, arg);
    }, wait)
  }

  debounced.cancel = cancel;
  return debounced;
}

export default debounce;