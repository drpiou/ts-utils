import filter from './filter';

/**
 * Filter the items that match "undefined" from the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function filterUndefined<Item>(source: Item[]): Exclude<Item, undefined>[] {
  return filter<Item, Exclude<Item, undefined>>(source, (value, _index, reject) => {
    return value === undefined ? reject : value;
  });
}
