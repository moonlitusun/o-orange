const _time = new class {
  /**
   * Correction timer
   * 
   * @param  { number } duration The time of timerd
   * @param  { function } handleFn The function of timerd
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
  
  /**
   * dateFormat
   * 
   * @param date 
   * @param format 
   */
  public dateFormat(date, format) {
    if (!date) return '';
  
    let _data = date;
    if (typeof date === 'string') _data = date.replace(/-/g, '/');
  
    const parseDate = new Date(_data);
  
    if (!(parseDate instanceof Date)) {
      console.error('The time format is wrong!');
      return '';
    }
  
    const dict = {
      yyyy: parseDate.getFullYear(),
      M: parseDate.getMonth() + 1,
      d: parseDate.getDate(),
      H: parseDate.getHours(),
      m: parseDate.getMinutes(),
      s: parseDate.getSeconds(),
      MM: (`${parseDate.getMonth() + 101}`).substr(1),
      dd: (`${parseDate.getDate() + 100}`).substr(1),
      HH: (`${parseDate.getHours() + 100}`).substr(1),
      mm: (`${parseDate.getMinutes() + 100}`).substr(1),
      ss: (`${parseDate.getSeconds() + 100}`).substr(1),
    };

    try {
      return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, f => dict[f]);
    } catch (e) {
      return parseDate;
    }
  }
}();

export const fixedTimerd = _time.fixedTimerd;
export const dateFormat = _time.dateFormat;

export default _time;




