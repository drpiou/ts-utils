/**
 * Order items in the source array.
 *
 * This function returns a new array.
 * To mutate the source array, see the "sort" function.
 *
 * Also exists for key-paired items, see the "orderBy" function.
 *
 * @param source Source array.
 * @param reversed Reverse order.
 * @returns Array
 */
export default function order<Item>(source: Item[], reversed?: boolean): Item[];
