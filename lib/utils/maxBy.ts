import { PickByValue } from 'utility-types';

export type MaxByIterateeFunction<Item extends Record<string, any>> = (item: Item, index: number) => number;

export type MaxByIterateeProperty<Item extends Record<string, any>> = keyof PickByValue<Item, number>;

export type MaxByIteratee<Item extends Record<string, any>> = MaxByIterateeProperty<Item> | MaxByIterateeFunction<Item>;

/**
 * Return the maximum value of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @returns number
 */
export default function maxBy<Item extends Record<string, any>>(
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
