/**
 * Add the given items to the end of the source array.
 *
 * This function mutates the source array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
export default function pushUniq<Item>(source: Item[], ...items: Item[]): Item[] {
  const count = Number(items.length);

  let index = 0;

  while (index < count) {
    const item = items[index];

    if (source.indexOf(item) === -1) {
      source.push(item);
    }

    index++;
  }

  return source;
}
