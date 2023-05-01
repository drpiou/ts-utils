import { describe, expect, test } from 'vitest';
import sumBy from './sumBy';

describe('sumBy', () => {
  const source = [
    { a: 1, b: '1' },
    { a: 3, b: 'NaN' },
    { a: 2, b: 'NaN' },
    { a: 4, b: 'NaN' },
    { a: 0, b: 'NaN' },
  ];

  test('empty', () => {
    const result = sumBy([], () => {
      return 0;
    });

    expect(result).toBe(undefined);
  });

  test('key', () => {
    const result = sumBy(source, 'a');

    expect(result).toBe(10);
  });

  test('function', () => {
    const result = sumBy(source, (item) => {
      return item.a;
    });

    expect(result).toBe(10);
  });

  test('nan:first', () => {
    const result = sumBy([{ a: 0, b: 'NaN' }, ...source], (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });

  test('nan:rest', () => {
    const result = sumBy(source, (item) => {
      return Number(item.b);
    });

    expect(result).toBe(undefined);
  });
});
