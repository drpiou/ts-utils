/**
 * Return the specified number of items in the source array.
 *
 * For the inverse, use the "Array.slice" method.
 *
 * @param source Source array.
 * @param count Count.
 * @returns Array
 */
export default function take<Item>(source: Item[], count: number): Item[] {
  return count >= 0 ? source.slice(0, count) : source.slice(count);
}
