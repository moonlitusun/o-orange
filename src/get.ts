import baseGet from './.internal/_get';
import isUndefined from './isUndefined';

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @category Object
 * @since 2.0.3
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see lodash.get
 * @example
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => default
 *
 */
function get(object, path, defaultValue) {
  const result = object === null ? undefined : baseGet(object, path);

  return isUndefined(result) ? defaultValue : result;

}

export default get;