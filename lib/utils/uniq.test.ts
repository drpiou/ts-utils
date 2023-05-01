import { expect, test } from 'vitest';
import uniq from './uniq';

test('uniq', () => {
  const source = ['a', 'b', 1];

  const result = uniq([...source, ...source]);

  expect(result).toEqual(source);
});
