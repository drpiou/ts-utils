import { describe, expect, test } from 'vitest';
import maxBy from './maxBy';

describe('maxBy', () => {
  const source = [
    { a: 1, b: '1' },
    { a: 3, b: '3' },
    { a: 2, b: '2' },
    { a: 4, b: '4' },
    { a: 0, b: '0' },
  ];

  test('empty', () => {
    const result = maxBy([], () => {
      return 0;
    });

    expect(result).toBe(undefined);
  });

  test('values:key', () => {
    const result = maxBy(source, 'a');

    expect(result).toBe(4);
  });

  test('values:callback', () => {
    const result = maxBy(source, (item) => {
      return item.a;
    });

    expect(result).toBe(4);
  });

  test('values:nan', () => {
    const result = maxBy(source, () => {
      return Number('NaN');
    });

    expect(result).toBe(undefined);
  });
});
