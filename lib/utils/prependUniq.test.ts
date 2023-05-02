import { expect, test } from 'vitest';
import prependUniq from './prependUniq';

test('prependUniq', () => {
  const source = ['a', 'b', 1];

  const result = prependUniq(source, ...source, true, [5]);

  expect(result).toEqual([true, [5], 'a', 'b', 1]);
});
