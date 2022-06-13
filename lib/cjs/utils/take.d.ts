/**
 * Return the specified number of items in the source array.
 *
 * For the inverse, use the "Array.slice" method.
 *
 * @param source Source array.
 * @param count Count.
 * @returns Array
 */
declare const take: <S>(source: S[], count: number) => S[];
export default take;
