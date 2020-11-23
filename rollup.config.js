import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

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

  return entryList;
}

function getConfigList() {
  const configList = [];
  const fileDict = findSync();

  for (const fileName in fileDict) {
    configList.push({
      input: fileDict[fileName],
      output: {
        dir: 'lib',
        format: 'umd',
        name: fileName,
      },
      plugins: [
        resolve(),
        typescript(),
        commonjs({
          extensions: ['.js', '.ts'],
        }),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          extensions: ['.ts'],
        }),
        // terser(),
      ]
    });
  }

  return configList;
}

export default getConfigList();
