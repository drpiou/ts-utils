import filter from './filter';

/**
 * Filter the items that match "null" from the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function filterNull<Item>(source: Item[]): Exclude<Item, null>[] {
  return filter(source, (value, _index, reject) => {
    return value === null ? reject() : value;
  });
}
