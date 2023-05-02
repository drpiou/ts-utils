/**
 * Return random items from the source array.
 *
 * @param source Source array.
 * @param count Count.
 * @param unique Should the items be uniq.
 * @returns Array
 */
export default function random<Item>(source: Item[], count?: number, unique?: boolean): Item[];
