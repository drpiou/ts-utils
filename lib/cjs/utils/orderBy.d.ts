/**
 * Order key-paired items in the source array.
 *
 * This function returns a new array.
 * To mutate the source array, see the "sortBy" function.
 *
 * Also exists for items, see the "order" function.
 *
 * @param source Source array.
 * @param key Item key.
 * @param reversed Reverse order.
 * @returns Array
 */
declare const orderBy: <S extends object>(source: S[], key: keyof S, reversed?: boolean) => S[];
export default orderBy;
