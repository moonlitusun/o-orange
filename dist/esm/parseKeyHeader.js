// src/parseKeyHeader.ts
function parseKeyHeader(target) {
  const [keys, valueArr] = [target[0], target.slice(1)];
  return valueArr.map((item) => {
    const resultObj = {};
    item.forEach((valueItem, valueIndex) => resultObj[keys[valueIndex]] = valueItem);
    return resultObj;
  });
}
export {
  parseKeyHeader as default
};
