import { Asserted } from '../types/generic';
/**
 * Check if the value is boolean number.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBooleanNumber<T extends 0 | 1>(value: unknown): value is Asserted<T>;
