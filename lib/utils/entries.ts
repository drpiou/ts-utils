/**
 * Return items number-indexed property [index, value] pairs of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function entries<Item>(source: Item[]): [number, Item][] {
  const result: [number, Item][] = [];

  const count = source.length;

  let index = 0;

  while (index < count) {
    result.push([index, source[index]]);

    index++;
  }

  return result;
}
