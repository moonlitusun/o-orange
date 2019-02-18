import isArray from '../isArray';

const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
const rePropName = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' + '|' +
  // Or match property names within brackets.
  '\\[(?:' +
    // Match a non-string expression.
    '([^"\'].*)' + '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
  ')\\]'+ '|' +
  // Or match "" as the space between consecutive dots or empty brackets.
  '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
, 'g')

/**
 * castPath
 *
 * @param path 
 * @param object 
 */
function castPath(path, object) {
  if (isArray(path)) return path;

  return Reflect.has(object, path) ? Array.of(path) : stringToPath(path);
}

/**
 * stringToPath
 *
 * @param string 
 */
function stringToPath(string) {
  const result = [];

  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('')
  }

  string.replace(rePropName, (match, expression, quote, subString) => {
    let key = match
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    }
    else if (expression) {
      key = expression.trim()
    }
    result.push(key)
  })

  return result;
}

/**
 * baseGet
 * 
 * @param object 
 * @param path 
 */
export default function baseGet(object, path) {
  const _path = castPath(path, object);
  const len = _path.length;
  let index = 0;
  
  while (object !== undefined && index < len) {
    object = object[_path[index++]];
  }
  
  return (index && index == len) ? object : undefined;
}
