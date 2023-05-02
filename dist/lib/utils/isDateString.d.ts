import { Asserted } from '../types/generic';
/**
 * Check if the value is a date string.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDateString<T extends string>(value: unknown): value is Asserted<T>;
