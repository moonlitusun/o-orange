const _type = new class {
  /**
   * check-array
   * 
   * @returns { boolean }
   * @since 0.0.1
   */
  public isArray(param) {
    return param instanceof Array || Object.prototype.toString.call(param) === '[object Array]';
  }

  /**
   * check-object
   * 
   * @returns { boolean }
   * @since 0.0.1
   */
  public isObject(param) {
    return param !== null && Object.prototype.toString.call(param) === '[object Object]';
  }

  /**
   * check-undefined
   * 
   * @returns { boolean }
   * @since 0.0.1
   */
  public isUndefined(param) {
    return param === void 0;
  }

  /**
   * check-number
   * 
   * @returns { boolean }
   * @since 0.0.1
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