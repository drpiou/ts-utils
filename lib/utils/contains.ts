export type ContainsPredicate<Item> = (item: Item, index: number) => boolean;

/**
 * Return whether the given item exists in the source array.
 *
 * @param source Source array.
 * @param predicate Predicate.
 * @returns boolean
 */
export default function contains<Item>(source: Item[], predicate: ContainsPredicate<Item>): boolean {
  const count = source.length;

  let index = 0;

  while (index < count) {
    if (predicate(source[index], index)) {
      return true;
    }

    index++;
  }

  return false;
}
