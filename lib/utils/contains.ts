export type ContainsClosure<Item> = (item: Item, index: number) => boolean;

/**
 * Return whether the given item exists in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
export default function contains<Item>(source: Item[], closure: ContainsClosure<Item>): boolean {
  const count = source.length;

  let index = 0;

  while (index < count) {
    if (closure(source[index], index)) {
      return true;
    }

    index++;
  }

  return false;
}
