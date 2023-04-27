import { expect, test } from 'vitest';
import entries from './entries';

test('entries', () => {
  const source = ['a', 'b', 1];

  const result = entries(source);

  expect(result).toEqual([
    [0, 'a'],
    [1, 'b'],
    [2, 1],
  ]);
});
