import { expect, test } from 'vitest';
import filterUndefined from './filterUndefined';

test('filterUndefined', () => {
  const source = ['a', 'b', 1, null, undefined];

  const result = filterUndefined(source);

  expect(result).toEqual(['a', 'b', 1, null]);
});
