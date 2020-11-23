const testPreset = [['@babel/preset-env', { targets: { node: 'current' } }]];
const normalPreset = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        browsers: ['last 2 versions', 'ie 10'],
        node: 'current',
      },
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
    },
  ],
];

module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: isTest ? testPreset : normalPreset,
    plugins: [],
  };
};
