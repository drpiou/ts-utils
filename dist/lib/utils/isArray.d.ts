import { Asserted } from '../types/generic';
/**
 * Check if the value is an array.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isArray<T>(value: unknown): value is Asserted<T[]>;
