import { describe, expect, test } from 'vitest';
import omit from './omit';

describe('omit', () => {
  const source = { a: 1, b: 2 };

  test('key', () => {
    const result = omit(source, ['a']);

    expect(result).toEqual({ b: 2 });
  });

  test('undefined', () => {
    const result = omit(source, ['z']);

    expect(result).toEqual(source);
  });
});
