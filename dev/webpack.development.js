const webpackMerge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base');

module.exports = env => {
  const config = webpackMerge(
    baseConfig(env),
    {
      devtool: 'inline-source-map',
      mode: 'development',
      output: {
        filename: '[name].development.js'
      },
      module: {
        rules: [
        ]
      }
    }
  );
  return config;
};