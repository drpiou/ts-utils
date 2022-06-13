/**
 * Fill the given value until the source array reaches the specified size.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param count Array size. If positive, pad to the end, otherwise to the beginning.
 * @param value Item to fill.
 * @returns Array
 */
declare const pad: <S>(source: S[], count: number, value: S) => S[];
export default pad;
