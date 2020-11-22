import { _ as __read } from './tslib.es6-3c42a745.js';

/**
 * Convert the first subproject to an array of keys to a json array
 *
 * @since 2.0.4
 * @category Array
 * @param {Array} target The array to execute
 * @returns {Array}
 *
 */
function parseKeyHeader(target) {
    var _a = __read([target[0], target.slice(1)], 2), keys = _a[0], valueArr = _a[1];
    return valueArr.map(function (item) {
        var resultObj = {};
        item.forEach(function (valueItem, valueIndex) { return resultObj[keys[valueIndex]] = valueItem; });
        return resultObj;
    });
}

export default parseKeyHeader;
