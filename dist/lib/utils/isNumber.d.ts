import { Asserted } from '../types/generic';
/**
 * Check if the value is a number.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isNumber<T extends number>(value: unknown): value is Asserted<T>;
