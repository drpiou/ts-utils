export type ChunkWhilePredicate<Item> = (item: Item, index: number, chunk: Item[]) => boolean;
/**
 * Break the source array into smaller arrays.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param predicate Predicate.
 * @returns Array
 */
export default function chunkWhile<Item>(source: Item[], predicate: ChunkWhilePredicate<Item>): Item[][];
