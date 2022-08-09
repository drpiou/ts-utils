import clone from './clone';
import pushUniq from './pushUniq';

/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
const concatUniq = <S>(source: S[], ...items: S[][]): S[] => {
  const result = clone(source);

  const c = Number(items.length);

  let i = 0;

  while (i < c) {
    const item = items[i];

    pushUniq(result, ...item);

    i++;
  }

  return result;
};

export default concatUniq;
