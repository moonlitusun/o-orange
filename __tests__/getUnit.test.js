const { default: orange, Lang } = require('../dist/cjs/orange');
const { default: getUnit, unitDict } = require('../dist/cjs/getUnit');

test('GetUnit', () => {
  expect(getUnit(undefined)).toEqual({
    label: '',
    value: 1,
  });
  expect(getUnit(90)).toEqual({
    label: '',
    value: 1,
  });
  expect(getUnit(1100)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );

  expect(getUnit(122000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );
  expect(getUnit(122000, { lanType: Lang.ZH_CN })).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万')
  );
  expect(getUnit(122000, { lanType: Lang.ZH_TW })).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬')
  );
});

test('GetUnit By EN_US', () => {
  orange.precision = 2;
  expect(getUnit(1000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );
  expect(getUnit(1000, { precision: 3, ignoreIntegerPrecision: false })).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );
  expect(getUnit(12200)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );

  orange.precision = 3;
  expect(getUnit(122000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'K')
  );
  expect(getUnit(1220000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'M')
  );
  expect(getUnit(12200000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'M')
  );
  expect(getUnit(122000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'M')
  );
  expect(getUnit(1220000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'B')
  );
  expect(getUnit(12200000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'B')
  );
  expect(getUnit(122000000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'B')
  );
  expect(getUnit(1220000000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'T')
  );
  expect(getUnit(12200000000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'T')
  );
  expect(getUnit(122000000000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'T')
  );
  expect(getUnit(1220000000000000)).toEqual(
    unitDict[Lang.EN_US].find((unit) => unit.label === 'T')
  );
});

test('GetUnit By ZH_CN', () => {
  orange.precision = 2;
  orange.lang = Lang.ZH_CN;

  expect(getUnit(1000)).toEqual({
    label: '',
    value: 1,
  });
  expect(getUnit(122000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万')
  );
  expect(getUnit(1220000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万')
  );
  expect(getUnit(12200000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万')
  );
  expect(getUnit(122000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '亿')
  );
  expect(getUnit(1220000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '亿')
  );
  expect(getUnit(12200000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '亿')
  );
  expect(getUnit(122000000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '亿')
  );
  expect(getUnit(1220000000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万亿')
  );
  expect(getUnit(12200000000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万亿')
  );
  expect(getUnit(122000000000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万亿')
  );
  expect(getUnit(1220000000000000)).toEqual(
    unitDict[Lang.ZH_CN].find((unit) => unit.label === '万亿')
  );
});

test('GetUnit By ZH_TW', () => {
  orange.precision = 2;
  orange.lang = Lang.ZH_TW;

  expect(getUnit(1000)).toEqual({
    label: '',
    value: 1,
  });
  expect(getUnit(122000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬')
  );
  expect(getUnit(1220000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬')
  );
  expect(getUnit(12200000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬')
  );
  expect(getUnit(122000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '億')
  );
  expect(getUnit(1220000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '億')
  );
  expect(getUnit(12200000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '億')
  );
  expect(getUnit(122000000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '億')
  );
  expect(getUnit(1220000000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬億')
  );
  expect(getUnit(12200000000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬億')
  );
  expect(getUnit(122000000000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬億')
  );
  expect(getUnit(1220000000000000)).toEqual(
    unitDict[Lang.ZH_TW].find((unit) => unit.label === '萬億')
  );
});
