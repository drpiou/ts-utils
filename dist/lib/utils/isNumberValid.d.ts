import { Asserted } from '../types/generic';
/**
 * Check if the value is valid number.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isNumberValid<T extends number>(value: unknown): value is Asserted<T>;
