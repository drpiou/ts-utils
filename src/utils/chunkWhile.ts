import { ChunkClosure } from '../types/collection';

/**
 * Break the source array into smaller arrays.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
const chunkWhile = <I>(source: I[], closure: ChunkClosure<I>): I[][] => {
  const result: I[][] = [];

  let chunk: I[] = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (closure(item, i, chunk)) {
      result.push([...chunk]);

      chunk = [];
    }

    chunk.push(item);

    i++;
  }

  result.push(chunk);

  return result;
};

export default chunkWhile;
