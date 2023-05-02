import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';
export type SumByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => number;
export type SumByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, number>;
export type SumByIteratee<Item extends PlainObject> = SumByIterateeProperty<Item> | SumByIterateeFunction<Item>;
/**
 * Return the sum of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Iteratee.
 * @returns number
 */
export default function sumBy<Item extends PlainObject>(source: Item[], iteratee: SumByIteratee<Item> | string): number | undefined;
