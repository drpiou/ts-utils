import { describe, expect, test } from 'vitest';
import every from './every';

describe('every', () => {
  const source = ['a', 'b', 1];

  test('true', () => {
    const result = every(source, (value) => ['string', 'number'].includes(typeof value));

    expect(result).toBe(true);
  });

  test('false', () => {
    const result = every(source, (value) => ['string'].includes(typeof value));

    expect(result).toBe(false);
  });
});
