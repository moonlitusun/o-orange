const _type = new class {
  /**
   * @name check-array
   */
  public isArray(param) {
    return param instanceof Array || Object.prototype.toString.call(param) === '[object Array]';
  }

  /**
   * @name check-object
   */
  public isObject(param) {
    return param !== null && Object.prototype.toString.call(param) === '[object Object]';
  }

  /**
   * @name check-undefined
   */
  public isUndefined(param) {
    return param === void 0;
  }

  /**
   * @name check-number
   */
  public isNumber(param) {
    return typeof param === 'number' || Object.prototype.toString.call(param) === '[object Number]';
  }

}();

export const isArray = _type.isArray;
export const isObject = _type.isObject;
export const isUndefined = _type.isUndefined;
export const isNumber = _type.isNumber;

export default _type;