import { arrayParamCheck } from './utils/aop/_array';

class _ {
  /**
   * @name pageCut-数组分页
   * @param { array } sourceArr 源数据
   * @param { number } [pageNum = 1] 当前页码 当pageNum为负数时从后往前计算页码
   * @param { number } [pageSize = 10] 一页多少条
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
   * @name shuffle-打乱数组顺序
   * @param { array } sourceArr 源数据
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