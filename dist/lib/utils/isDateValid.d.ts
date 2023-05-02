import { Asserted } from '../types/generic';
/**
 * Check if the value is a valid date.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDateValid<T extends Date>(value: unknown): value is Asserted<T>;
