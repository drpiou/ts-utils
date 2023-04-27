import { expect, test } from 'vitest';
import every from './every';

test('every', () => {
  const source = ['a', 'b', 1];

  const resultTrue = every(source, (value) => ['string', 'number'].includes(typeof value));

  expect(resultTrue).toBe(true);

  const resultFalse = every(source, (value) => ['string'].includes(typeof value));

  expect(resultFalse).toBe(false);
});
