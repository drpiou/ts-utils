/**
 * Return random items from the source array.
 *
 * @param source Source array.
 * @param count Count.
 * @param unique Should the items be uniq.
 * @returns Array
 */
declare const random: <S>(source: S[], count?: number | undefined, unique?: boolean | undefined) => S[];
export default random;
