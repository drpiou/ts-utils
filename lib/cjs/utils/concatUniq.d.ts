/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
declare const concatUniq: <S, I>(source: S[], ...items: I[][]) => (S | I)[];
export default concatUniq;
