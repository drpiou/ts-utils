import filter from './filter';

/**
 * Filter the items that match "null" or "undefined" from the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function filterNullish<Item>(source: Item[]): Exclude<Item, null | undefined>[] {
  return filter(source, (value, _index, reject) => {
    return value === null || value === undefined ? reject() : value;
  });
}
