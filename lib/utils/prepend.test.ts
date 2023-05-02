import { expect, test } from 'vitest';
import prepend from './prepend';

test('prepend', () => {
  const source = ['a', 'b', 1];

  const result = prepend(source, true, [5]);

  expect(result).toEqual([true, [5], 'a', 'b', 1]);
});
