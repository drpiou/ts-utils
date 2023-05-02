import { Asserted } from '../types/generic';
/**
 * Check if the value is string filled.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isStringFilled<T extends string>(value: unknown): value is Asserted<T>;
