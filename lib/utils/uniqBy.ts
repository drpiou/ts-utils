/**
 * Return all the unique key-paired items in the source array.
 *
 * Also exists for array items, see the "uniq" method.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Array
 */
const uniqBy = <S extends object, K extends keyof S>(source: S[], key: K): S[] => {
  const result: S[] = [];
  const resultKeys: S[K][] = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];
    const itemKey = item[key];

    if (resultKeys.indexOf(itemKey)) {
      result.push(item);
      resultKeys.push(itemKey);
    }

    i++;
  }

  return result;
};

export default uniqBy;
