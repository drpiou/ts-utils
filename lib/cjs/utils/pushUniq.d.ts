/**
 * Add the given items to the end of the source array.
 *
 * This function mutates the source array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
declare const pushUniq: <S, I>(source: S[], ...items: I[]) => (S | I)[];
export default pushUniq;
