import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const path = require('path');
const fs = require('fs');
const join = require('path').join;

/**
 * 
 * @param startPath
 * @returns {Array}
 */
function findSync(startPath = './src') {
  const entryList = {};
  const files = fs.readdirSync(startPath);

  files.forEach(val => {
    const fPath = join(startPath, val);
    const stats = fs.statSync(fPath);
    // if (stats.isDirectory()) findSync(fPath);
    if (stats.isFile()) {
      const match = fPath.match(/src\/(\S*)(.ts|.js)/);
      const name = match[1];

      entryList[name] = `./src/${name}.${match[2] === '.js' ? 'js' : 'ts'}`;
    }
  });

  console.log(entryList, '<-- entryList');
  return entryList;
}

const config = {
  input: findSync(),
  output: {
    dir: 'lib',
    format: 'esm',
    name: '[name]',
  },
  plugins: [
    resolve(),
    typescript({
    }),
    commonjs({
      extensions: ['.js', '.ts'],
    }),
  ]
};

export default config;
