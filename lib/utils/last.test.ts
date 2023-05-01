import { describe, expect, test } from 'vitest';
import last from './last';

describe('last', () => {
  const source = ['a', 'b', 1, null, undefined];

  test('default', () => {
    const result = last(source);

    expect(result).toBe(undefined);
  });

  test('value', () => {
    const result = last(source, (value, _index, reject) => {
      return typeof value === 'string' ? value : reject;
    });

    expect(result).toBe('b');
  });

  test('index', () => {
    const result = last(source, (value, index, reject) => {
      return index === 0 ? value : reject;
    });

    expect(result).toBe('a');
  });

  test('null', () => {
    const result = last(source, (value, _index, reject) => {
      return value === null ? value : reject;
    });

    expect(result).toBe(null);
  });

  test('undefined', () => {
    const result = last(source, (value, _index, reject) => {
      return value === 'undefined' ? value : reject;
    });

    expect(result).toBe(undefined);
  });
});
