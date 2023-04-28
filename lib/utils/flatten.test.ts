import { describe, expect, test } from 'vitest';
import flatten from './flatten';

describe('flatten', () => {
  const source = ['a', 'b', [1], [['c', 2, true]]];

  test('default', () => {
    const result = flatten(source);

    expect(result).toEqual(['a', 'b', 1, ['c', 2, true]]);
  });

  test('true', () => {
    const result = flatten(source, true);

    expect(result).toEqual(['a', 'b', 1, 'c', 2, true]);
  });

  test('false', () => {
    const result = flatten(source, false);

    expect(result).toEqual(['a', 'b', 1, ['c', 2, true]]);
  });
});
