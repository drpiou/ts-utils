import { describe, expect, test } from 'vitest';
import min from './min';

describe('min', () => {
  const source = [1, 3, 2, 4, 0];

  test('empty', () => {
    const result = min([]);

    expect(result).toBe(undefined);
  });

  test('values', () => {
    const result = min(source);

    expect(result).toBe(0);
  });
});
