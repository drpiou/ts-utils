import { PlainObject } from '../types/generic';
/**
 * Removes the keys of the source object.
 *
 * @param source Source object.
 * @param keys Keys to remove.
 * @returns Object
 */
export default function omit<Item extends PlainObject, Keys extends keyof Item, Key extends Keys | string>(source: Item, keys: Key[]): Omit<Item, Key>;
