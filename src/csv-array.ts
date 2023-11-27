/**
 * 转换 csv 数组为对象数组
 */
export function csvArrayToObjects<Result extends Record<string, any>>(
  arr: any[][],
  renameMap: Record<string, string> = {}
): Result[] {
  const result: Result[] = [];

  if (arr?.length && arr.length <= 1) {
    return [];
  }

  const keys = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    const values = arr[i];
    const obj = {};

    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      const value = values[j];
      const realKey = renameMap[key] || key;
      obj[realKey] = value;
    }

    result.push(obj as Result);
  }

  return result;
}

/**
 * 转换 csv 数组为对象数组, 但另外指定keys名称
 */
export function csvArrayWithoutKeysToObjects<
  Result extends Record<string, any>,
>(
  arr: any[][],
  keys: string[],
  renameMap: Record<string, string> = {}
): Result[] {
  const result: Result[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    const values = arr[i];
    const obj = {};

    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      const value = values[j];
      const realKey = renameMap[key] || key;
      obj[realKey] = value as Result;
    }

    result.push(obj as Result);
  }

  return result;
}
