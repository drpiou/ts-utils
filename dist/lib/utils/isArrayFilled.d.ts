import { Asserted } from '../types/generic';
/**
 * Check if the value is an array filled.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isArrayFilled<T>(value: unknown): value is Asserted<T[]>;
