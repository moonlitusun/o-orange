const _timerd = new class {
  /**
   * @name fixedTimerd-定时器不准修正函数
   * @param  { number } duration [定时器时间]
   * @param  { function } handleFn [定时器要处理的函数]
   * @returns { void } 
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

export const fixedTimerd = _timerd.fixedTimerd;

export default _timerd;




