import { PlainObject } from '../types/generic';
export type SortByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => string;
export type SortByIterateeProperty<Item extends PlainObject> = keyof Item;
export type SortByIteratee<Item extends PlainObject> = SortByIterateeProperty<Item> | SortByIterateeFunction<Item>;
/**
 * Sort key-paired items in the source array.
 *
 * This function mutates the source array.
 * To return a new array, see the "orderBy" function.
 *
 * Also exists for items, see the "sort" function.
 *
 * @param source Source array.
 * @param iteratee Iteratee.
 * @param reversed Reverse order.
 * @returns Array
 */
export default function sortBy<Item extends PlainObject>(source: Item[], iteratee: SortByIteratee<Item> | string, reversed?: boolean): Item[];
