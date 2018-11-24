import { pad } from './_number';

const _date = new class {
  /**
   * Query time zone time
   * 
   * @param { number } timezone The timezone to query
   * @param { string | number } date The time to query
   * @returns { string }
   */
  public queryTimezoneTime(timezone: number = 8, date: string | number = Date.now()): string {
    const
      queryDate: any = new Date(date),
      offset: number = queryDate.getTimezoneOffset(),
      utilDate: any = new Date();

    utilDate.setTime(queryDate.getTime() + offset * 60 * 1000 + timezone * 60 * 60 * 1000);

    return `${utilDate.getMonth() + 1}-${utilDate.getDate()} ${pad(utilDate.getHours())}:${pad(utilDate.getMinutes())}:${pad(utilDate.getSeconds())}`
  }
}();

export const queryTimezoneTime = _date.queryTimezoneTime;

export default _date;


