import { Asserted, PlainObject } from '../types/generic';
/**
 * Check if the value is a plain object.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isPlainObject<T extends PlainObject>(value: unknown): value is Asserted<T>;
