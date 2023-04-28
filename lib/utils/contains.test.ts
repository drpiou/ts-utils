import { describe, expect, test } from 'vitest';
import contains from './contains';

describe('contains', () => {
  const source = ['a', 'b', 1];

  test('true', () => {
    const result = contains(source, (value) => value === 'b');

    expect(result).toBe(true);
  });

  test('false', () => {
    const result = contains(source, (value) => value === 5);

    expect(result).toBe(false);
  });
});
