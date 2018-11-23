const _number = new class {
  /**
   * @name 不足两位自己前缀0
   * @param {number | string} targetNum 
   * 
   */
  perfixNumber(targetNum): string {
    return targetNum < 10 ? `0${targetNum}` : `${targetNum}`;
  }

  /**
   * @name 数字加千位为分隔符
   * @param { number } targetNum 当前数字
   * @param { number } [fixLength = 无] 保留小数点位
   * @param { string } [sign = ','] 分隔符号
   */
  public convertTHSSeparator(targetNum: number = 0, fixLength: number, sign: string = ','): string {
    const parseNum = (fixLength || fixLength === 0) ? Number(targetNum).toFixed(fixLength) : targetNum;
    let [integer, decimals] = parseNum.toString().split('.');

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, sign);
    return decimals ? `${integer}.${decimals}` : integer;
  }

  /**
   * @name 数字转百分数
   * @param { number } targetNum 当前数字
   * @param { number } [fixLength = 无] 保留小数点位
   */
  public convertPercent(targetNum: number = 0, fixLength: number): string {
    const _targetNum = targetNum * 100;
    const parseNum = (fixLength || fixLength === 0) ? Number(_targetNum).toFixed(fixLength) : _targetNum;

    return `${parseNum}%`;
  }

  /**
   * @name 数字保留小数位
   * @param { number | string } targetNum 当前数字
   * @param { number } [fixLength = 2] 保留小数点位
   */
  public convertFixed(targetNum: number | string = 0, fixLength: number = 2): number | string {
    const parseNum = Number(targetNum);

    if (isNaN(parseNum)) return targetNum;
    return parseNum.toFixed(fixLength);
  }
}();

export const perfixNumber = _number.perfixNumber;
export const convertTHSSeparator = _number.convertTHSSeparator;
export const convertPercent = _number.convertPercent;
export const convertFixed = _number.convertFixed;

export default _number;
