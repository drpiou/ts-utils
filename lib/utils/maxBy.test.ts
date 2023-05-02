import { describe, expect, test } from 'vitest';
import maxBy from './maxBy';

describe('maxBy', () => {
  const source = [
    { a: 1, b: '1' },
    { a: 3, b: 'NaN' },
    { a: 2, b: 'NaN' },
    { a: 4, b: 'NaN' },
    { a: 0, b: 'NaN' },
  ];

  test('empty', () => {
    const result = maxBy([], () => {
      return 0;
    });

    expect(result).toBe(undefined);
  });

  test('key', () => {
    const result = maxBy(source, 'a');

    expect(result).toBe(4);
  });

  test('function', () => {
    const result = maxBy(source, (item) => {
      return item.a;
    });

    expect(result).toBe(4);
  });

  test('nan:first', () => {
    const result = maxBy([{ a: 0, b: 'NaN' }, ...source], (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });

  test('nan:rest', () => {
    const result = maxBy(source, (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });
});
