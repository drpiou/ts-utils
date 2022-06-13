import { BooleanClosure } from '../types/collection';

/**
 * Filter the items that pass a given truth test in the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param closure Callback function.
 * @returns Array
 */
const filter = <S>(source: S[], closure?: BooleanClosure<S>): S[] => {
  const result = [];

  const c = source.length;

  let i = 0;

  while (i < c) {
    const item = source[i];

    if (closure?.(item, i) ?? Boolean(item)) {
      result.push(item);
    }

    i++;
  }

  return result;
};

export default filter;
