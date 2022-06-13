/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 * To mutate the source array, use the "Array.push" method.
 *
 * For the inverse, see the "prepend" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
declare const append: <S, I>(source: S[], ...items: I[]) => (S | I)[];
export default append;
