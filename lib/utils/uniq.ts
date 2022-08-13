/**
 * Return all the unique items in the source array.
 *
 * Also exists for key-paired items, see the "uniqBy" method.
 *
 * @param source Source array.
 * @returns Array
 */
const uniq = <S>(source: S[]): S[] => {
  const result: S[] = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (result.indexOf(item)) {
      result.push(item);
    }

    i++;
  }

  return result;
};

export default uniq;
