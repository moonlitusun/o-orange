import isArray from '../isArray';

/**
 * Check if the first argument of the function is an array
 * 
 */
export function 
arrayPrecheck(): any {
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