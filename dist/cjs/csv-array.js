var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/csv-array.ts
var csv_array_exports = {};
__export(csv_array_exports, {
  csvArrayToObjects: () => csvArrayToObjects,
  csvArrayWithoutKeysToObjects: () => csvArrayWithoutKeysToObjects
});
module.exports = __toCommonJS(csv_array_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  csvArrayToObjects,
  csvArrayWithoutKeysToObjects
});
