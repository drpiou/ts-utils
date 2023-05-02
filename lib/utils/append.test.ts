import { expect, test } from 'vitest';
import append from './append';

test('append', () => {
  const source = ['a', 'b', 1];

  const result = append(source, 'a', 'b', true);

  expect(result).toEqual(['a', 'b', 1, 'a', 'b', true]);
});
