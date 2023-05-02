import { PlainObject } from '../types/generic';
/**
 * Return the indexes of the source array.
 *
 * @param source Source array.
 * @returns Array
 */
export default function keys<Item extends any[] | PlainObject, Result = Item extends any[] ? number : keyof Item>(source: Item): Result[];
