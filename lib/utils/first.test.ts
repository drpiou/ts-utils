import { describe, expect, test } from 'vitest';
import first from './first';

describe('first', () => {
  const source = ['a', 'b', 1, null, undefined];

  test('first', () => {
    const result = first(source);

    expect(result).toEqual('a');
  });

  test('value', () => {
    const result = first(source, (value, _index, reject) => {
      return typeof value === 'string' ? reject() : value;
    });

    expect(result).toEqual(1);
  });

  test('index', () => {
    const result = first(source, (value, index, reject) => {
      return index === 0 ? reject() : value;
    });

    expect(result).toEqual('b');
  });

  test('null', () => {
    const result = first(source, (value, _index, reject) => {
      return value !== null ? reject() : value;
    });

    expect(result).toEqual(null);
  });

  test('undefined', () => {
    const result = first(source, (value, _index, reject) => {
      return value !== undefined ? reject() : value;
    });

    expect(result).toEqual(undefined);
  });
});
