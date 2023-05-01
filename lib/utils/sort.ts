/**
 * Sort items in the source array.
 *
 * This function mutates the source array.
 * To return a new array, see the "order" function.
 *
 * Also exists for key-paired items, see the "sortBy" function.
 *
 * @param source Source array.
 * @param reversed Reverse order.
 * @returns Array
 */
const sort = <S>(source: S[], reversed?: boolean): S[] => {
  return source.sort((a, b) => {
    return (reversed ? String(a) > String(b) : String(a) < String(b)) ? -1 : 1;
  });
};

export default sort;
