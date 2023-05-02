/**
 * Sort items in the source array.
 *
 * This function mutates the source array.
 * To return a new array, see the "order" function.
 *
 * Also exists for key-paired items, see the "sortBy" function.
 *
 * @param source Source array.
 * @param reversed Reverse order.
 * @returns Array
 */
export default function sort<Item>(source: Item[], reversed?: boolean): Item[];
