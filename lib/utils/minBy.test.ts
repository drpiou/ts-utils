import { describe, expect, test } from 'vitest';
import minBy from './minBy';

describe('minBy', () => {
  const source = [
    { a: 1, b: '1' },
    { a: 3, b: 'NaN' },
    { a: 2, b: 'NaN' },
    { a: 4, b: 'NaN' },
    { a: 0, b: 'NaN' },
  ];

  test('empty', () => {
    const result = minBy([], () => {
      return 0;
    });

    expect(result).toBe(undefined);
  });

  test('key', () => {
    const result = minBy(source, 'a');

    expect(result).toBe(0);
  });

  test('function', () => {
    const result = minBy(source, (item) => {
      return item.a;
    });

    expect(result).toBe(0);
  });

  test('nan:first', () => {
    const result = minBy([{ a: 0, b: 'NaN' }, ...source], (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });

  test('nan:rest', () => {
    const result = minBy(source, (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });
});
