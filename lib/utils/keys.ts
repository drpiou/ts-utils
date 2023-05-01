/**
 * Return the indexes of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function keys<Item extends any[] | Record<string, any>, Result = Item extends any[] ? number : keyof Item>(
  source: Item,
): Result[] {
  if (!Array.isArray(source)) {
    return Object.keys(source) as Result[];
  }

  const count = source.length;

  const result = [];

  let index = 0;

  while (index < count) {
    result.push(index as Result);

    index++;
  }

  return result;
}
