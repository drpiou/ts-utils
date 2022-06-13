/**
 * Order items in the source array.
 *
 * This function returns a new array.
 * To mutate the source array, see the "sort" function.
 *
 * Also exists for key-paired items, see the "orderBy" function.
 *
 * @param source Source array.
 * @param reversed Reverse order.
 * @returns Array
 */
declare const order: <S>(source: S[], reversed?: boolean) => S[];
export default order;
