import { expect, test } from 'vitest';
import filterNull from './filterNull';

test('filterNull', () => {
  const source = ['a', 'b', 1, null, undefined];

  const result = filterNull(source);

  expect(result).toEqual(['a', 'b', 1, undefined]);
});
