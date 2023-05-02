import { Asserted } from '../types/generic';
/**
 * Check if the value is a date.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDate<T extends Date>(value: unknown): value is Asserted<T>;
