/**
 * Correction timer
 *
 * @categoty Util
 * @since 0.0.1
 * @param  {number} duration The time of timerd
 * @param  {function} handleFn The function of timerd
 * @returns {void}
 * @example
 *
 */
function interval(duration: number, handle: Function): Function {
  let
    timerId: number,
    lastInvokeTime: number = Date.now();

  function diff() {
    const currInvokeTime: number = Date.now();
    let offset: number = currInvokeTime - lastInvokeTime - duration;
    offset = offset < 0 ? 0 : offset;
    
    lastInvokeTime = currInvokeTime;
    const c = duration - offset;
    console.log(c)
    return c;
  }

  function cancel() {
    clearTimeout(timerId);
  }

  function intervaling() {
    handle();
    
    timerId = setTimeout(intervaling, diff());
  }
  
  timerId = setTimeout(intervaling, duration);

  intervaling.cancel = cancel;

  return intervaling;
}

export default interval;