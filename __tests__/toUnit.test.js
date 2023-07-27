const { default: toUnit, UNIT_LAN } = require('../dist/cjs/toUnit');

test('toUnit', () => {
  expect(toUnit(undefined)).toBe('--');
  expect(toUnit(1100)).toBe('1.10K');
  expect(toUnit(1000, { lanType: UNIT_LAN.ZH_CN, precision: 3 })).toBe("1000");
  expect(toUnit(12200, { lanType: UNIT_LAN.ZH_CN, precision: 3 })).toBe('1.220万');
  expect(toUnit(122000, { lanType: UNIT_LAN.ZH_CN })).toBe('12.20万');
  expect(toUnit(1220000, { lanType: UNIT_LAN.ZH_CN })).toBe('122万');
  expect(toUnit(12200000, { lanType: UNIT_LAN.ZH_CN })).toBe('1220万');
  expect(toUnit(122000000, { lanType: UNIT_LAN.ZH_CN })).toBe('1.22亿');
  expect(toUnit(1220000000, { lanType: UNIT_LAN.ZH_CN })).toBe('12.20亿');
  expect(toUnit(12200000000, { lanType: UNIT_LAN.ZH_CN })).toBe('122亿');
  expect(toUnit(122000000000, { lanType: UNIT_LAN.ZH_CN })).toBe('1220亿');
  expect(toUnit(1220000000000, { lanType: UNIT_LAN.ZH_CN })).toBe('1.22万亿');
  expect(toUnit(12200000000000, { lanType: UNIT_LAN.ZH_CN })).toBe('12.20万亿');
  expect(toUnit(122000000000000, { lanType: UNIT_LAN.ZH_CN })).toBe('122万亿');
  expect(toUnit(1220000000000000, { lanType: UNIT_LAN.ZH_CN })).toBe('1220万亿');
})