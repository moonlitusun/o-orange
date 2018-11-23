const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base');

module.exports = env => {
  const config = webpackMerge(
    baseConfig(env),
    {
      mode: 'production',
      output: {
        filename: '[name].js'
      },
      module: {
        rules: [
        ]
      },
    }
  );
  return config;
};