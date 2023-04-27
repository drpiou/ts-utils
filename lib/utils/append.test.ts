import { expect, test } from 'vitest';
import append from './append';

test('append', () => {
  const source = ['a', 'b', 1];

  const result = append(source, true, [5]);

  expect(result).toEqual(['a', 'b', 1, true, [5]]);
});
