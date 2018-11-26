import { arrayParamCheck } from './utils/aop/_array';

class _ {
  /**
   * Cut the array
   *
   * @param { array } sourceArr The Array to execute
   * @param { number } [pageNum = 1] Current page number(Calculate the page number from the back when it is negative)
   * @param { number } [pageSize = 10] One page of Size
   * @returns { array }
   */
  @arrayParamCheck()
  public pagination(sourceArr: Array<any>, pageNum: number = 1, pageSize: number = 10): Array<any> {
    const
      beginIndex: number = (pageNum - 1) * pageSize,
      endIndex: number = pageNum * pageSize,
      len = sourceArr.length;

    return sourceArr.slice(beginIndex, endIndex > len ? len : endIndex);
  }

  /**
   * Upset the array
   *
   * @param { array } sourceArr The Array to execute
   * @returns { array }
   */
  @arrayParamCheck()
  public shuffle(sourceArr: Array<any>): Array<any> {
    let
      len: number = sourceArr.length,
      randomIndex: number = 0;

    while (len) {
      randomIndex = ~~(Math.random() * len--);
      [sourceArr[randomIndex], sourceArr[len]] = [sourceArr[len], sourceArr[randomIndex]];
    }
    
    return sourceArr;
  }
};

const _array = new _();

export const pagination = _array.pagination;
export const shuffle = _array.shuffle;

export default _array;