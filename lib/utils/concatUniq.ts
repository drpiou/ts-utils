import clone from './clone';
import pushUniq from './pushUniq';

/**
 * Add the given items to the end of the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param items Items to add.
 * @returns Collection
 */
export default function concatUniq<Item, Items extends unknown[]>(source: Item[], ...items: Items[]): (Item | Items[number])[] {
  const result = clone(source);

  const count = items.length;

  let index = 0;

  while (index < count) {
    const item = items[index];

    pushUniq(result, ...item);

    index++;
  }

  return result;
}
