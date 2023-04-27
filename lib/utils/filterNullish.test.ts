import { expect, test } from 'vitest';
import filterNullish from './filterNullish';

test('filterNullish', () => {
  const source = ['a', 'b', 1, null, undefined];

  const result = filterNullish(source);

  expect(result).toEqual(['a', 'b', 1]);
});
