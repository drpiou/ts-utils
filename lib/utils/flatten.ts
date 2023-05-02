import { FlattenDeep } from '../types/generic';

/**
 * Flatten the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Flatten recursively.
 * @returns Array
 */
export default function flatten<Item, Deep extends boolean = false, Result = Deep extends true ? FlattenDeep<Item> : Item>(
  source: Item[],
  deep?: Deep,
): Result[] {
  const count = source.length;

  const result = [];

  let index = 0;

  while (index < count) {
    const item = source[index];

    result.push(...((Array.isArray(item) ? (deep ? flatten(item) : item) : [item]) as Result[]));

    index++;
  }

  return result;
}
