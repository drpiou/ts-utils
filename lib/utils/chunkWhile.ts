export type ChunkPredicate<Item> = (item: Item, index: number, chunk: Item[]) => boolean;

/**
 * Break the source array into smaller arrays.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param predicate Callback function.
 * @returns Array
 */
export default function chunkWhile<Item>(source: Item[], predicate: ChunkPredicate<Item>): Item[][] {
  const count = source.length;

  const result: Item[][] = [];

  let index = 0;
  let chunk: Item[] = [];

  while (index < count) {
    const item = source[index];

    if (predicate(item, index, chunk)) {
      result.push([...chunk]);

      chunk = [];
    }

    chunk.push(item);

    index++;
  }

  result.push(chunk);

  return result;
}
