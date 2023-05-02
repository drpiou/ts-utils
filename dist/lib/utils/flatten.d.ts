import { FlattenDeep } from '../types/generic';
/**
 * Flatten the source array.
 *
 * This function returns a new array.
 *
 * @param source Source array.
 * @param deep Flatten recursively.
 * @returns Array
 */
export default function flatten<Item, Deep extends boolean = false, Result = Deep extends true ? FlattenDeep<Item> : Item>(source: Item[], deep?: Deep): Result[];
