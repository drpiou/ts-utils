import { describe, expect, test } from 'vitest';
import minBy from './minBy';

describe('minBy', () => {
  const source = [
    { a: 1, b: '1' },
    { a: 3, b: '3' },
    { a: 2, b: '2' },
    { a: 4, b: '4' },
    { a: 0, b: '0' },
  ];

  test('empty', () => {
    const result = minBy([], () => {
      return 0;
    });

    expect(result).toBe(undefined);
  });

  test('values:key', () => {
    const result = minBy(source, 'a');

    expect(result).toBe(0);
  });

  test('values:callback', () => {
    const result = minBy(source, (item) => {
      return item.a;
    });

    expect(result).toBe(0);
  });

  test('values:nan', () => {
    const result = minBy(source, () => {
      return Number('NaN');
    });

    expect(result).toBe(undefined);
  });
});
