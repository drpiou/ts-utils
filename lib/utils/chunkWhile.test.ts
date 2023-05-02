import { describe, expect, test } from 'vitest';
import chunkWhile from './chunkWhile';

describe('chunkWhile', () => {
  const source = ['a', 'b', 'a', 1];

  test('chunk', () => {
    const result = chunkWhile(source, (item, _index, chunk) => {
      return chunk.indexOf(item) > -1;
    });

    expect(result).toEqual([
      ['a', 'b'],
      ['a', 1],
    ]);
  });

  test('index', () => {
    const result = chunkWhile(source, (_item, index) => {
      return index > 1;
    });

    expect(result).toEqual([['a', 'b'], ['a'], [1]]);
  });
});
