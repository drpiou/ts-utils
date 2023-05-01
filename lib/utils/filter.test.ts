import { describe, expect, test } from 'vitest';
import filter from './filter';

describe('filter', () => {
  const source = ['a', 'b', 1, null, undefined];

  test('value', () => {
    const result = filter(source, (value, _index, reject) => {
      return typeof value === 'number' ? value : reject();
    });

    expect(result).toEqual([1]);
  });

  test('index', () => {
    const result = filter(source, (value, index, reject) => {
      return index === 0 ? value : reject();
    });

    expect(result).toEqual(['a']);
  });

  test('null', () => {
    const result = filter(source, (value, _index, reject) => {
      return value !== null ? value : reject();
    });

    expect(result).toEqual(['a', 'b', 1, undefined]);
  });

  test('undefined', () => {
    const result = filter(source, (value, _index, reject) => {
      return value !== undefined ? value : reject();
    });

    expect(result).toEqual(['a', 'b', 1, null]);
  });
});
