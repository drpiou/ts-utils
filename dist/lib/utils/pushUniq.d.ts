/**
 * Add the given items to the end of the source array.
 *
 * This function mutates the source array.
 * To return a new array, use the "appendUniq" method.
 *
 * For the inverse, see the "unshiftUniq" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
export default function pushUniq<Item>(source: Item[], ...items: Item[]): Item[];
