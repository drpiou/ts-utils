export type PartitionClosure<Item> = (item: Item, index: number) => boolean;

/**
 * Separate items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function. If returns true, item is put on left, otherwise on right.
 * @returns Array
 */
const partition = <S>(source: S[], closure: PartitionClosure<S>): S[][] => {
  const itemsLeft = [];
  const itemsRight = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (closure(item, i)) {
      itemsLeft.push(item);
    } else {
      itemsRight.push(item);
    }

    i++;
  }

  return [itemsLeft, itemsRight];
};

export default partition;
