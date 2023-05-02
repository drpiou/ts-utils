import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';

export type KeyByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => string;

export type KeyByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, string>;

export type KeyByIteratee<Item extends PlainObject> = KeyByIterateeProperty<Item> | KeyByIterateeFunction<Item>;

/**
 * Return the key-paired items of the source array.
 *
 * @param source Source array.
 * @param iteratee Iteratee.
 * @returns Object
 */
export default function keyBy<
  Item extends PlainObject,
  Iteratee extends KeyByIteratee<Item>,
  Value extends string = Iteratee extends KeyByIterateeProperty<Item> ? Item[Iteratee] : ReturnType<KeyByIterateeFunction<Item>>,
>(source: Item[], iteratee: Iteratee | string): { [Key in Value]: Item } {
  const count = source.length;

  const parser: KeyByIterateeFunction<Item> =
    typeof iteratee === 'function' ? (s, i) => iteratee(s, i) : (s) => String(s[iteratee as string]);

  const result = {} as { [Key in Value]: Item };

  let index = 0;

  while (index < count) {
    const item = source[index];
    const key = parser(item, index) as Value;

    result[key] = item;

    index++;
  }

  return result;
}
