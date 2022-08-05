/**
 * Return the maximum value of the items in the source array.
 *
 * @param source Source array.
 * @param key Item key.
 * @returns number
 */
declare const max: <S>(source: S[], key?: keyof S | undefined) => number;
export default max;
