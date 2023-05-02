import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';

export type MaxByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => number;

export type MaxByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, number>;

export type MaxByIteratee<Item extends PlainObject> = MaxByIterateeProperty<Item> | MaxByIterateeFunction<Item>;

/**
 * Return the maximum value of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @returns number
 */
export default function maxBy<Item extends PlainObject>(
  source: Item[],
  iteratee: MaxByIteratee<Item> | string,
): number | undefined {
  const count = source.length;

  if (!count) {
    return undefined;
  }

  const parser: MaxByIterateeFunction<Item> =
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
    } else if (value > result) {
      result = value;
    }

    index++;
  }

  return result;
}
