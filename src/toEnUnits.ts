/**
 * Convert value to English units, like 1B 1M 1K
 *
 * @param {*} value 数值
 *
 */
const units = [
  { key: 'T', val: 1_000_000_000_000 },
  { key: 'B', val: 1_000_000_000 },
  { key: 'M', val: 1_000_000 },
  { key: 'K', val: 1_000 },
];

export function toEnUnits(value, len = 2) {
  // if (typeof value !== 'number') return value;

  // const leng = units.length;
  // const sign = Math.sign(value);
  // const valueAbs = Math.abs(value);
  // let result = 0;

  // if (valueAbs < units[leng - 1].val) return new Decimal(value).toFixed(2);

  // for (let i = 0; i < leng; i++) {
  //   const { key, val } = units[i];

  //   if (valueAbs >= val) {
  //     result = `${sign === -1 ? '-' : ''}${new Decimal(valueAbs / val).toFixed(len)}${key}`;
  //     break;
  //   }
  // }

  // return result;
}

export default toEnUnits;
