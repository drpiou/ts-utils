import { describe, expect, test } from 'vitest';
import max from './max';

describe('max', () => {
  const source = [1, 3, 2, 4, 0];

  test('empty', () => {
    const result = max([]);

    expect(result).toBe(undefined);
  });

  test('values', () => {
    const result = max(source);

    expect(result).toBe(4);
  });
});
