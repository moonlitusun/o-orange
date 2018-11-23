import { perfixNumber } from './_number';

const _date = new class {
  /**
   * @name queryTimezoneTime-查询时区时间
   * @param { number } timezone 要查询的时区
   * @param { string | number } date 要查询的时间
   * @returns { string }
   */
  public queryTimezoneTime(timezone: number = 8, date: string | number = Date.now()): string {
    const
      queryDate: any = new Date(date),
      offset: number = queryDate.getTimezoneOffset(),
      utilDate: any = new Date();

    utilDate.setTime(queryDate.getTime() + offset * 60 * 1000 + timezone * 60 * 60 * 1000);

    return `${utilDate.getMonth() + 1}-${utilDate.getDate()} ${perfixNumber(utilDate.getHours())}:${perfixNumber(utilDate.getMinutes())}:${perfixNumber(utilDate.getSeconds())}`
  }
}();

export const queryTimezoneTime = _date.queryTimezoneTime;

export default _date;


