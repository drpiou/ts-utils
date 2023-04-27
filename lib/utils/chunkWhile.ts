export type ChunkClosure<Item> = (item: Item, index: number, chunk: Item[]) => boolean;

/**
 * Break the source array into smaller arrays.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
export default function chunkWhile<Item>(source: Item[], closure: ChunkClosure<Item>): Item[][] {
  const result: Item[][] = [];

  const count = source.length;

  let index = 0;
  let chunk: Item[] = [];

  while (index < count) {
    const item = source[index];

    if (closure(item, index, chunk)) {
      result.push([...chunk]);

      chunk = [];
    }

    chunk.push(item);

    index++;
  }

  result.push(chunk);

  return result;
}
