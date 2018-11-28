/**
 * bind this
 * 
 * @since 0.0.3
 * 
 */
export function bind(...args) {
  return function bindDecorator(target, name, descriptor) {
    return {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
      get() {
        return descriptor.value.bind(this, ...args);
      },
    };
  };
}

/**
 * debounce
 * 
 * @param { number } [duration = 2000]
 * @since 0.0.3
 */
export function debounce(duration: number = 2000) {
  return function debounceDecorator(target, name, descriptor) {
    const desc = descriptor;
    let flag = true;

    desc.value = function(...rest) {
      if (flag) {
        flag = false;
        setTimeout(() => flag = true, duration);

        return desc.value.apply(this, rest);
      }

      return false;
    }

    return descriptor;
  };
}

export default {
  bind,
  debounce,
};