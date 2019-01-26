/**
 * bind this
 * Just for jsx syntax
 * 
 * @category JSX decorator
 * @since 0.0.3
 * @param {*} args
 * @returns
 * @example
 * 
 * class X extends PureComponent {
 *  state = {
 *    name = 'jsx'
 *  }
 *  
 *  @bind()
 *  getName() {
 *    console.log(this.state.name);
 *  }
 * 
 *  render() {
 *    this.getName();
 *  }
 * }
 *
 */
function bind(...args) {
  return function (target, name, descriptor) {
    descriptor.value = () => descriptor.value.bind(this, ...args);
    return descriptor;
  }
}

export default bind;