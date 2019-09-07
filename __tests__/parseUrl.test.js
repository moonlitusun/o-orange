import parseUrl from '../lib/parseUrl';

test('parseUrl', () => {
  const url = 'http://localhost:8080/?key=3'

  expect(parseUrl(url, 'key')).toBe('3');
  expect(parseUrl(url, 'value')).toBe(null);
})