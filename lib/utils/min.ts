/**
 * Return the minimum value of the items in the source array.
 *
 * @param source Source array.
 * @returns number
 */
export default function min(source: number[]): number | undefined {
  const count = source.length;

  if (!count) {
    return undefined;
  }

  let result = source[0];

  let index = 1;

  while (index < count) {
    const value = source[index];

    if (value < result) {
      result = value;
    }

    index++;
  }

  return result;
}
