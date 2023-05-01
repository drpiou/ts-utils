import clone from './clone';
import unshiftUniq from './unshiftUniq';

/**
 * Add the given items to the beginning of the source array.
 *
 * This function returns a new array.
 * To mutate the source array, use the "Array.unshift" method.
 *
 * For the inverse, see the "append" function.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Array
 */
export default function prependUniq<Item, Values extends any[]>(source: Item[], ...items: Values): (Item | Values[number])[] {
  const result = clone(source);

  unshiftUniq(result, ...items);

  return result;
}
