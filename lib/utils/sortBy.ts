export type SortByIterateeFunction<Item extends Record<string, any>> = (item: Item, index: number) => string;

export type SortByIterateeProperty<Item extends Record<string, any>> = keyof Item;

export type SortByIteratee<Item extends Record<string, any>> = SortByIterateeProperty<Item> | SortByIterateeFunction<Item>;

/**
 * Sort key-paired items in the source array.
 *
 * This function mutates the source array.
 * To return a new array, see the "orderBy" function.
 *
 * Also exists for items, see the "sort" function.
 *
 * @param source Source array.
 * @param iteratee Item iteratee.
 * @param reversed Reverse order.
 * @returns Array
 */
export default function sortBy<Item extends Record<string, any>>(
  source: Item[],
  iteratee: SortByIteratee<Item> | string,
  reversed?: boolean,
): Item[] {
  const parser: SortByIterateeFunction<Item> =
    typeof iteratee === 'function' ? (s, i) => iteratee(s, i) : (s) => String(s[iteratee]);

  let index = 0;

  return source.sort((a, b) => {
    const item = (reversed ? parser(a, index) > parser(b, index) : parser(a, index) < parser(b, index)) ? -1 : 1;

    index++;

    return item;
  });
}
