import { describe, expect, test } from 'vitest';
import partition from './partition';

describe('partition', () => {
  const source = ['a', 'b', 1];

  test('value', () => {
    const result = partition(source, (value, _index, reject) => {
      return typeof value === 'string' ? value : reject;
    });

    expect(result).toEqual([['a', 'b'], [1]]);
  });

  test('index', () => {
    const result = partition(source, (value, index, reject) => {
      return index === 0 ? value : reject;
    });

    expect(result).toEqual([['a'], ['b', 1]]);
  });
});
