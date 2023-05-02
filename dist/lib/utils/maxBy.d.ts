import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';
export type MaxByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => number;
export type MaxByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, number>;
export type MaxByIteratee<Item extends PlainObject> = MaxByIterateeProperty<Item> | MaxByIterateeFunction<Item>;
/**
 * Return the maximum value of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Iteratee.
 * @returns number
 */
export default function maxBy<Item extends PlainObject>(source: Item[], iteratee: MaxByIteratee<Item> | string): number | undefined;
