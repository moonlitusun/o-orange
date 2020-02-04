import { IGenericObject } from './types/common/interface';

/**
 * Convert the first subproject to an array of keys to a json array
 *
 * @since 2.0.4
 * @category Array
 * @param {Array} target The array to execute
 * @returns {Array}
 *
 */
export default function parseKeyHeader(target: any[]): any[] {
  const [keys, valueArr] = [target[0], target.slice(1)];

  return valueArr.map(item => {
    const resultObj: IGenericObject<any> = {};
    item.forEach((valueItem, valueIndex) => resultObj[keys[valueIndex]] = valueItem);

    return resultObj;
  });
}
