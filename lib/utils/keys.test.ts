import { describe, expect, test } from 'vitest';
import keys from './keys';

describe('keys', () => {
  const sourceArray = ['a', 'b', 1];
  const sourceObject = { a: 1, b: 2 };

  test('array:filled', () => {
    const result = keys(sourceArray);

    expect(result).toEqual([0, 1, 2]);
  });

  test('array:empty', () => {
    const result = keys([]);

    expect(result).toEqual([]);
  });

  test('object:filled', () => {
    const result = keys(sourceObject);

    expect(result).toEqual(['a', 'b']);
  });

  test('object:empty', () => {
    const result = keys({});

    expect(result).toEqual([]);
  });
});
