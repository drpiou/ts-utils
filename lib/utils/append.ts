import clone from './clone';

/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 * To mutate the source array, use the "Array.push" method.
 *
 * For the inverse, see the "prepend" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
export default function append<Item, Items extends any[]>(source: Item[], ...items: Items): (Item | Items[number])[] {
  const result: Item[] = clone(source);

  result.push(...(items as Item[]));

  return result;
}
