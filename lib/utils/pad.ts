import fill from 'lodash/fill';

/**
 * Fill the given value until the source array reaches the specified size.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param count Array size. If positive, pad to the end, otherwise to the beginning.
 * @param value Item to fill.
 * @returns Array
 */
export default function pad<Item, Value>(source: Item[], count: number, value: Value): (Item | Value)[] {
  const countAbs = Math.abs(count);
  const size = source.length;

  if (!count || countAbs < size) {
    return source;
  }

  const fillArray = fill(new Array(countAbs - size), value);

  return count < 0 ? [...fillArray, ...source] : [...source, ...fillArray];
}
