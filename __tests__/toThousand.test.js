import { toThousand } from '../es';

test('toThousand', () => {
  expect(toThousand(11345)).toBe('11,345');
  expect(toThousand(11345.2345)).toBe('11,345.2345');
  expect(toThousand(11345.2345, ' ')).toBe('11 345.2345');
  expect(toThousand(11345123132.2345)).toBe('11,345,123,132.2345');
})