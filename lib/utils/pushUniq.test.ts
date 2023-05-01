import { expect, test } from 'vitest';
import pushUniq from './pushUniq';

test('pushUniq', () => {
  const source = ['a', 'b'];

  const result = pushUniq(source, ...source, 'z');

  expect(result).toEqual(['a', 'b', 'z']);
});
