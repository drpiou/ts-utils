import { expect, test } from 'vitest';
import invert from './invert';

test('invert', () => {
  const source = ['a', 'b', 1];

  const result = invert(source);

  expect(result).toEqual([1, 'b', 'a']);
});
