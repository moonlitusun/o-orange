/**
 * Get date dictionary
 *
 * @param {string | number} date The date to convert
 *
 */
function getDateDict(date) {
    var currentDate = new Date(date);
    return {
        yyyy: currentDate.getFullYear(),
        M: currentDate.getMonth() + 1,
        d: currentDate.getDate(),
        H: currentDate.getHours(),
        m: currentDate.getMinutes(),
        s: currentDate.getSeconds(),
        MM: ("" + (currentDate.getMonth() + 101)).substr(1),
        dd: ("" + (currentDate.getDate() + 100)).substr(1),
        HH: ("" + (currentDate.getHours() + 100)).substr(1),
        mm: ("" + (currentDate.getMinutes() + 100)).substr(1),
        ss: ("" + (currentDate.getSeconds() + 100)).substr(1),
    };
}
/**
 *
 * Conversion time format
 *
 * @category Date
 * @since 0.0.1
 * @param {string | number} date The date to convert
 * @param {string} format yyyy, M, MM, dd, d, HH, H, mm, m, ss, s
 * @returns {string}
 * @example
 *
 * dateFormat(1548297785895, 'yy
 * yy-MM-dd HH:mm:ss')
 * // => 2019-01-24 10:43:05
 *
 */
function dateFormat(date, format) {
    if (!date)
        throw new Error('Invalid Date');
    if (!format)
        throw new Error('Please enter the date format you want to convert');
    // Compatible with ios system
    var internalDate = date;
    if (typeof internalDate === 'string')
        internalDate = internalDate.replace(/-/g, '/');
    try {
        return format.replace(/(yyyy|MM?|dd?|HH?|mm?|ss?)/g, function (f) { return getDateDict(internalDate)[f]; });
    }
    catch (e) {
        throw new Error('The date format is wrong!');
    }
}

export default dateFormat;
