import { describe, expect, test } from 'vitest';
import keyBy from './keyBy';

describe('keyBy', () => {
  const source = [
    { a: 'a', b: 1, c: 0 },
    { a: 'b', b: 2, c: '' },
    { a: 'c', b: 3, c: '' },
  ];

  test('a', () => {
    const result = keyBy(source, 'a');

    expect(result).toEqual({
      a: { a: 'a', b: 1, c: 0 },
      b: { a: 'b', b: 2, c: '' },
      c: { a: 'c', b: 3, c: '' },
    });
  });

  test('b', () => {
    const result = keyBy(source, (item) => {
      return String(item.b);
    });

    expect(result).toEqual({
      1: { a: 'a', b: 1, c: 0 },
      2: { a: 'b', b: 2, c: '' },
      3: { a: 'c', b: 3, c: '' },
    });
  });

  test('c', () => {
    const result = keyBy(source, 'c');

    expect(result).toEqual({
      0: { a: 'a', b: 1, c: 0 },
      '': { a: 'c', b: 3, c: '' },
    });
  });
});
