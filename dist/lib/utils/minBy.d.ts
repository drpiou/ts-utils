import { PickByValue } from 'utility-types';
import { PlainObject } from '../types/generic';
export type MinByIterateeFunction<Item extends PlainObject> = (item: Item, index: number) => number;
export type MinByIterateeProperty<Item extends PlainObject> = keyof PickByValue<Item, number>;
export type MinByIteratee<Item extends PlainObject> = MinByIterateeProperty<Item> | MinByIterateeFunction<Item>;
/**
 * Return the minimum value of the items in the source array.
 *
 * @param source Source array.
 * @param iteratee Iteratee.
 * @returns number
 */
export default function minBy<Item extends PlainObject>(source: Item[], iteratee: MinByIteratee<Item> | string): number | undefined;
