import compose from '../dist/compose';

test('compose', () => {
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  function join(name) {
    return `hello, ${name}`;
  }

  const fn = compose([toUpperCase, join]);
  expect(fn('jacky')).toBe('HELLO, JACKY');
  expect(fn('tom')).toBe('HELLO, TOM');
})