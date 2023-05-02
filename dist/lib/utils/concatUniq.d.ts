/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
export default function concatUniq<Item, Items extends unknown[]>(source: Item[], ...items: Items[]): (Item | Items[number])[];
