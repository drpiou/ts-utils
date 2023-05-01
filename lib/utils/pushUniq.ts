/**
 * Add the given items to the end of the source array.
 *
 * This function mutates the source array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
const pushUniq = <S>(source: S[], ...items: S[]): S[] => {
  const c = Number(items.length);

  let i = 0;

  while (i < c) {
    const item = items[i];

    if (source.indexOf(item) === -1) {
      source.push(item);
    }

    i++;
  }

  return source;
};

export default pushUniq;
