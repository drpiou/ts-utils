export type EveryClosure<Item> = (item: Item, index: number) => boolean;

/**
 * Verify that all items pass a given truth test in the source array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns boolean
 */
export default function every<Item>(source: Item[], closure: EveryClosure<Item>): boolean {
  const count = source.length;

  let index = 0;

  while (index < count) {
    if (!closure(source[index], index)) {
      return false;
    }

    index++;
  }

  return true;
}
