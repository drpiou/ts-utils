/**
 * Return items number-indexed property [index, value] pairs of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function entries<Item>(source: Item[]): [number, Item][] {
  const count = source.length;

  const result = [] as [number, Item][];

  let index = 0;

  while (index < count) {
    result.push([index, source[index]]);

    index++;
  }

  return result;
}
