import { describe, expect, test } from 'vitest';
import filter from './filter';

describe('filter', () => {
  const source = ['a', 'b', 1, null, undefined];

  test('value', () => {
    const result = filter(source, (value, _index, reject) => {
      return typeof value === 'number' ? reject() : value;
    });

    expect(result).toEqual(['a', 'b', null, undefined]);
  });

  test('index', () => {
    const result = filter(source, (value, index, reject) => {
      return index === 2 ? reject() : value;
    });

    expect(result).toEqual(['a', 'b', null, undefined]);
  });

  test('null', () => {
    const result = filter(source, (value, _index, reject) => {
      return value === null ? reject() : value;
    });

    expect(result).toEqual(['a', 'b', 1, undefined]);
  });

  test('undefined', () => {
    const result = filter(source, (value, _index, reject) => {
      return value === undefined ? reject() : value;
    });

    expect(result).toEqual(['a', 'b', 1, null]);
  });
});
