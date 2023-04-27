import { expect, test } from 'vitest';
import contains from './contains';

test('contains', () => {
  const source = ['a', 'b', 1];

  const resultTrue = contains(source, (value) => value === 'b');

  expect(resultTrue).toBe(true);

  const resultFalse = contains(source, (value) => value === 5);

  expect(resultFalse).toBe(false);
});
