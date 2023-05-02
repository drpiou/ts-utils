import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';

export type SumByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => number;

export type SumByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, number>;

export type SumByIteratee<Item extends PlainObject> = SumByIterateeProperty<Item> | SumByIterateeFunction<Item>;

/**
 * Return the sum of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @returns number
 */
export default function sumBy<Item extends PlainObject>(
  source: Item[],
  iteratee: SumByIteratee<Item> | string,
): number | undefined {
  const count = source.length;

  if (!count) {
    return undefined;
  }

  const parser: SumByIterateeFunction<Item> =
    typeof iteratee === 'function' ? (s, i) => iteratee(s, i) : (s) => Number(s[iteratee]);

  let result = parser(source[0], 0);

  if (isNaN(result)) {
    return undefined;
  }

  let index = 1;

  while (index < count) {
    const value = parser(source[index], index);

    if (isNaN(value)) {
      return undefined;
    }

    result = value + result;

    index++;
  }

  return result;
}
