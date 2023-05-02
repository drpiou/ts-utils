import { PlainObject } from '../types/generic';
import clone from './clone';
import sortBy, { SortByIteratee } from './sortBy';

export type OrderByIteratee<Item extends PlainObject> = SortByIteratee<Item>;

/**
 * Order key-paired items in the source array.
 *
 * This function returns a new array.
 * To mutate the source array, see the "sortBy" function.
 *
 * Also exists for items, see the "order" function.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @param reversed Reverse order.
 * @returns Array
 */
export default function orderBy<Item extends PlainObject>(
  source: Item[],
  iteratee: OrderByIteratee<Item> | string,
  reversed?: boolean,
): Item[] {
  return sortBy(clone(source), iteratee, reversed);
}
