import { describe, expect, test } from 'vitest';
import paths from './paths';

describe('paths', () => {
  const source = { a: 1, b: { c: 1, d: { e: 1 } } };

  test('default', () => {
    const result = paths(source);

    expect(result).toEqual(['a', 'b', 'b.c', 'b.d', 'b.d.e']);
  });

  test('true', () => {
    const result = paths(source, true);

    expect(result).toEqual(['a', 'b.c', 'b.d.e']);
  });

  test('false', () => {
    const result = paths(source, false);

    expect(result).toEqual(['a', 'b', 'b.c', 'b.d', 'b.d.e']);
  });
});
