/**
 * Clone the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Clone recursively.
 * @returns Array
 */
export default function clone<Item>(source: Item[], deep?: boolean): Item[];
