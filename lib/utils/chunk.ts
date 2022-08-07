import chunkWhile from './chunkWhile';

/**
 * Break the source array into smaller arrays of a given size.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param size Chunk size.
 * @returns Array
 */
const chunk = <I>(source: I[], size: number): I[][] => {
  return chunkWhile(source, (_item, _index, _chunk) => _chunk.length === size);
};

export default chunk;
