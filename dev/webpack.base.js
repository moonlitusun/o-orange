const path = require('path');

module.exports = env => {
  return {
    context: path.resolve(__dirname, '../src/'),
    entry: {
      'o-orange': './index',
      "array": './_array',
      "date": './_date',
      "location": './_location',
      "number": './_number',
      "timerd": './_timerd',
      "type": './_type',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      library: 'o-orange',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.ts?$/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
          exclude: /node_modules/,
        },
      ]
    },
  };
};
