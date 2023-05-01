import { describe, expect, test } from 'vitest';
import sum from './sum';

describe('sum', () => {
  const source = [1, 3, 2, 4, 0];

  test('empty', () => {
    const result = sum([]);

    expect(result).toBe(undefined);
  });

  test('values', () => {
    const result = sum(source);

    expect(result).toBe(10);
  });
});
