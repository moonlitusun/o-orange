const _time = new class {
  /**
   * Correction timer
   * 
   * @param  { number } duration The time of timerd
   * @param  { function } handleFn The function of timerd
   * @returns { void }
   * @since 0.0.1
   */
  public fixedTimerd(duration: number, handleFunc: Function): void {
    let prevTimestamp: number = Date.now();

    const fixedFunc = (): void => {
      handleFunc();

      const currTimestamp: number = Date.now();
      let offset: number = currTimestamp - prevTimestamp - duration;
      offset = offset < 0 ? 0 : offset;
      prevTimestamp = currTimestamp;

      const fixedTime: number = duration - offset;
      setTimeout(fixedFunc, fixedTime);
    }
    
    setTimeout(fixedFunc, duration);
  }
}();

export const fixedTimerd = _time.fixedTimerd;

export default _time;
