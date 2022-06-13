/**
 * Sort key-paired items in the source array.
 *
 * This function mutates the source array.
 * To return a new array, see the "orderBy" function.
 *
 * Also exists for items, see the "sort" function.
 *
 * @param source Source array.
 * @param key Item key.
 * @param reversed Reverse order.
 * @returns Array
 */
const sortBy = <S extends object>(source: S[], key: keyof S, reversed?: boolean): S[] => {
  const compareFunction = (a: S, b: S): number =>
    (reversed ? String(a[key]) > String(b[key]) : String(a[key]) < String(b[key])) ? -1 : 1;

  return source.sort(compareFunction);
};

export default sortBy;
