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
export default function flatten<Item, Deep extends boolean = false, Return = Deep extends true ? FlattenDeep<Item>[] : Item[]>(
  source: Item[],
  deep?: Deep,
): Return {
  const result = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    result.push(...((Array.isArray(item) ? (deep ? flatten(item) : item) : [item]) as Item[]));

    i++;
  }

  return result as Return;
}
