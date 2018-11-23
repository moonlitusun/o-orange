import { isArray } from'../../_type';

/**
 * @name arrayParamCheck-检查函数第一个参数是否为数组
 */
export function arrayParamCheck(): any {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): object {
    const
      tempDescriptor: PropertyDescriptor = descriptor,
      tempValue: any = tempDescriptor.value;

    tempDescriptor.value =  function(...rest) {
      const [paramArr] = rest;

      if  (!isArray(paramArr) || paramArr === 0) return [];
      return tempValue.apply(this, rest);
    }

    return descriptor;
  }
}