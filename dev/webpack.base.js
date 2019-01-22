const path = require('path');
const fs = require('fs');
const join = require('path').join;



/**
 * 
 * @param startPath
 * @returns {Array}
 */
function findSync(startPath) {

  const entryList = {};
  const files = fs.readdirSync(startPath);

  files.forEach(val => {
    const fPath = join(startPath, val);
    const stats = fs.statSync(fPath);
    // if (stats.isDirectory()) findSync(fPath);
    if (stats.isFile()) {
      let name = fPath.match(/src\/(\S*).ts/)[1];

      if (name === 'index') {
        entryList['o-orange'] = `./${name}.ts`
      }
      else {
        entryList[name] = `./${name}.ts`;
      }
    }
  });

  return entryList;
}

module.exports = env => {
  return {
    context: path.resolve(__dirname, '../src/'),
    entry: findSync('./src'),
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      library: 'o-orange',
      libraryTarget: 'umd',
    },
    module: {
      rules: [{
          test: /\.js?$/,
          use: [{
            loader: 'babel-loader',
          }, ],
          exclude: /node_modules/,
        },
        {
          test: /\.ts?$/,
          use: [{
            loader: 'ts-loader',
          }, ],
          exclude: /node_modules/,
        },
      ]
    },
  };
};