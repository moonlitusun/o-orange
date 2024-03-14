// src/csv-array.ts
function csvArrayToObjects(arr, renameMap = {}) {
  const result = [];
  if ((arr == null ? void 0 : arr.length) && arr.length <= 1) {
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
    result.push(obj);
  }
  return result;
}
function csvArrayWithoutKeysToObjects(arr, keys, renameMap = {}) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const values = arr[i];
    const obj = {};
    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      const value = values[j];
      const realKey = renameMap[key] || key;
      obj[realKey] = value;
    }
    result.push(obj);
  }
  return result;
}
export {
  csvArrayToObjects,
  csvArrayWithoutKeysToObjects
};
