/**
 * Return all the unique items in the source array.
 *
 * Also exists for key-paired items, see the "uniqBy" method.
 *
 * @param source Source array.
 * @returns Array
 */
export default function uniq<Item>(source: Item[]): Item[] {
  const count = source.length;

  const result = [] as Item[];

  let index = 0;

  while (index < count) {
    const item = source[index];

    if (result.indexOf(item) === -1) {
      result.push(item);
    }

    index++;
  }

  return result;
}
