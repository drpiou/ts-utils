export type EveryPredicate<Item> = (item: Item, index: number) => boolean;

/**
 * Verify that all items pass a given truth test in the source array.
 *
 * @param source Source array.
 * @param predicate Callback function.
 * @returns boolean
 */
export default function every<Item>(source: Item[], predicate: EveryPredicate<Item>): boolean {
  const count = source.length;

  if (!count) {
    return false;
  }

  let index = 0;

  while (index < count) {
    if (!predicate(source[index], index)) {
      return false;
    }

    index++;
  }

  return true;
}
