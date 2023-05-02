import { expect, test } from 'vitest';
import concatUniq from './concatUniq';

test('concatUniq', () => {
  const source = ['a', 'b', 1];

  const result = concatUniq(source, ['a', 'z'], [2, true]);

  expect(result).toEqual(['a', 'b', 1, 'z', 2, true]);
});
