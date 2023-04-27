import { expect, test } from 'vitest';
import chunkWhile from './chunkWhile';

test('chunkWhile', () => {
  const source = ['a', 'b', 'a', 1];

  const resultChunk = chunkWhile(source, (item, _index, chunk) => {
    return chunk.indexOf(item) > -1;
  });

  expect(resultChunk).toEqual([
    ['a', 'b'],
    ['a', 1],
  ]);

  const resultIndex = chunkWhile(source, (_item, index) => {
    return index > 1;
  });

  expect(resultIndex).toEqual([['a', 'b'], ['a'], [1]]);
});
