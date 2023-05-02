import { describe, expect, test } from 'vitest';
import first from './first';

describe('first', () => {
  const source = ['a', 'b', 1, null, undefined];

  test('default', () => {
    const result = first(source);

    expect(result).toBe('a');
  });

  test('value', () => {
    const result = first(source, (value, _index, reject) => {
      return typeof value === 'number' ? value : reject;
    });

    expect(result).toBe(1);
  });

  test('index', () => {
    const result = first(source, (value, index, reject) => {
      return index === 0 ? value : reject;
    });

    expect(result).toBe('a');
  });

  test('null', () => {
    const result = first(source, (value, _index, reject) => {
      return value === null ? value : reject;
    });

    expect(result).toBe(null);
  });

  test('undefined', () => {
    const result = first(source, (value, _index, reject) => {
      return value === 'undefined' ? value : reject;
    });

    expect(result).toBe(undefined);
  });
});
