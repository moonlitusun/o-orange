---
group:
  title: 数组处理
  order: 2
order: 1
---

# CSV Array

转换首行为key的数组为JSONArray。

## Since

`3.8.0`

## csvArrayToObjects

### Arguments

- `array: any[][]`: The array to execute
- `[renameMap = {}]: number`: 首行keys的映射

### Returns

- `Returns: Record<string, any>[]`: Returns the new array of result.

### Examples

```js
const {
  csvArrayToObjects,
} = require('../dist/cjs/csv-array');

describe('函数csvArrayToObjects', () => {
  test('输入空数组应该返回空数组', () => {
    const arr = [];
    const result = csvArrayToObjects(arr);
    expect(result).toEqual([]);
  });

  test('输入数组只有一行数据，应该返回空数组', () => {
    const arr = [['key1', 'key2']];
    const result = csvArrayToObjects(arr);
    expect(result).toEqual([]);
  });

  test('应该转换csv数组为对象数组', () => {
    const arr = [
      ['key1', 'key2'],
      ['value1', 'value2'],
      ['value3', 'value4'],
    ];
    const result = csvArrayToObjects(arr);
    expect(result).toEqual([
      { key1: 'value1', key2: 'value2' },
      { key1: 'value3', key2: 'value4' },
    ]);
  });

  test('转换时应该支持命名映射表', () => {
    const arr = [
      ['名字', '年龄'],
      ['小明', '25'],
      ['小红', '30'],
    ];
    const renameMap = {
      名字: 'name',
      年龄: 'age',
    };
    const result = csvArrayToObjects(arr, renameMap);
    expect(result).toEqual([
      { name: '小明', age: '25' },
      { name: '小红', age: '30' },
    ]);
  });
});
```

## csvArrayWithoutKeysToObjects

### Arguments

- `array: Array`: The array to execute
- `[keys = []]: string[]`: keys
- `[renameMap = {}]: Record<string, string>`: 首行keys的映射

### Returns

- `Returns: Record<string, any>[]`: Returns the new array of result.

### Exampless

```js
const {
  csvArrayWithoutKeysToObjects,
} = require('../dist/cjs/csv-array');

describe('函数csvArrayWithoutKeysToObjects', () => {
  test('输入空数组应该返回空数组', () => {
    const arr: any[][] = [];
    const keys: string[] = [];
    const result = csvArrayWithoutKeysToObjects(arr, keys);
    expect(result).toEqual([]);
  });

  test('应该转换csv数组为对象数组', () => {
    const arr: any[][] = [
      ['value1', 'value2'],
      ['value3', 'value4'],
    ];
    const keys: string[] = ['key1', 'key2'];
    const result = csvArrayWithoutKeysToObjects(arr, keys);
    expect(result).toEqual([
      { key1: 'value1', key2: 'value2' },
      { key1: 'value3', key2: 'value4' },
    ]);
  });

  test('转换时应该支持命名映射表', () => {
    const arr: any[][] = [
      ['小明', '25'],
      ['小红', '30'],
    ];
    const keys: string[] = ['名字', '年龄'];
    const renameMap = {
      名字: 'name',
      年龄: 'age',
    };
    const result = csvArrayWithoutKeysToObjects(arr, keys, renameMap);
    expect(result).toEqual([
      { name: '小明', age: '25' },
      { name: '小红', age: '30' },
    ]);
  });
});
```
