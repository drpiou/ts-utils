import { expect, test } from 'vitest';
import uniqBy from './uniqBy';

test('uniqBy', () => {
  const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }];

  const result = uniqBy([...source, ...source], 'a');

  expect(result).toEqual(source);
});
