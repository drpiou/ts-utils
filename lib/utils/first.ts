export type FirstClosure<Item> = (item: Item, index: number) => boolean;

/**
 * Return the first item that passes a given truth test in the source array.
 *
 * This function returns the first item.
 * To mutate the source array, use the "Array.shift" method.
 *
 * For the inverse, see the "last" function.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns any
 */
const first = <S>(source: S[], closure?: FirstClosure<S>): S | undefined => {
  if (!closure) {
    return source[0];
  }

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (closure(item, i)) {
      return item;
    }

    i++;
  }

  return;
};

export default first;
