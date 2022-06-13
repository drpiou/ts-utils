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
declare const sortBy: <S extends object>(source: S[], key: keyof S, reversed?: boolean) => S[];
export default sortBy;
