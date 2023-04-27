import { expect, test } from 'vitest';
import chunk from './chunk';

test('chunk', () => {
  const source = ['a', 'b', 1];

  const result = chunk(source, 2);

  expect(result).toEqual([['a', 'b'], [1]]);
});
