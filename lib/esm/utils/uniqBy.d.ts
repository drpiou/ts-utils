/**
 * Return all the unique key-paired items in the source array.
 *
 * Also exists for array items, see the "uniq" method.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns Array
 */
declare const uniqBy: <S extends object, K extends keyof S>(source: S[], key: K) => S[];
export default uniqBy;
