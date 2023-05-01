/**
 * Return all the unique key-paired items in the source array.
 *
 * Also exists for array items, see the "uniq" method.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Array
 */
export default function uniqBy<Item extends object, Key extends keyof Item>(source: Item[], key: Key | string): Item[] {
  const result = [];
  const resultKeys = [] as Item[Key][];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (key in item) {
      const itemKey = item[key as Key];

      if (resultKeys.indexOf(itemKey) === -1) {
        result.push(item);
        resultKeys.push(itemKey);
      }
    }

    i++;
  }

  return result;
}
