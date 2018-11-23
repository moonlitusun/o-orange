/**
 * bind this
 * 
 */
export function bind(...args) {
  return function bindDecorator(target, name, descriptor) {
    const desc = {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
      get() {
        return descriptor.value.bind(this, ...args);
      },
    };
    return desc;
  };
}

export default {
  bind,
};