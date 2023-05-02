import { Asserted } from '../types/generic';
/**
 * Check if the value is boolean string.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBooleanString<T extends 'true' | 'false'>(value: unknown): value is Asserted<T>;
