import { describe, expect, test } from 'vitest';
import take from './take';

describe('take', () => {
  const source = ['a', 'b', 1];

  test('left', () => {
    const result = take(source, 2);

    expect(result).toEqual(['a', 'b']);
  });

  test('right', () => {
    const result = take(source, -2);

    expect(result).toEqual(['b', 1]);
  });
});
