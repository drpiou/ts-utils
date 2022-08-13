/**
 * Return the minimum value of the items in the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns number
 */
declare const min: <S>(source: S[], key?: keyof S | undefined) => number;
export default min;
