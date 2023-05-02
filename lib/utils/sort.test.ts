import { describe, expect, test } from 'vitest';
import sort from './sort';

describe('sort', () => {
  const source = ['b', 1, 'a', 3, 2];

  test('default', () => {
    const result = sort(source);

    expect(source).toEqual([1, 2, 3, 'a', 'b']);
    expect(result).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('true', () => {
    const result = sort(source, true);

    expect(source).toEqual(['b', 'a', 3, 2, 1]);
    expect(result).toEqual(['b', 'a', 3, 2, 1]);
  });

  test('false', () => {
    const result = sort(source, false);

    expect(source).toEqual([1, 2, 3, 'a', 'b']);
    expect(result).toEqual([1, 2, 3, 'a', 'b']);
  });
});
