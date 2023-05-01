import { PickByValue } from 'utility-types';

export type SumByIterateeFunction<Item extends Record<string, any>> = (item: Item, index: number) => number;

export type SumByIterateeProperty<Item extends Record<string, any>> = keyof PickByValue<Item, number>;

export type SumByIteratee<Item extends Record<string, any>> = SumByIterateeProperty<Item> | SumByIterateeFunction<Item>;

/**
 * Return the sum of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @returns number
 */
export default function sumBy<Item extends Record<string, any>>(
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
