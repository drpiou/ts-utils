/**
 * Add the given items to the beginning of the source array.
 *
 * This function mutates the source array.
 * To return a new array, use the "prependUniq" method.
 *
 * For the inverse, see the "pushUniq" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
export default function unshiftUniq<Item>(source: Item[], ...items: Item[]): Item[] {
  const count = items.length;

  let index = count - 1;

  while (index >= 0) {
    const item = items[index];

    if (source.indexOf(item) === -1) {
      source.unshift(item);
    }

    index--;
  }

  return source;
}
