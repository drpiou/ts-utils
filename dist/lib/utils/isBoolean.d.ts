import { Asserted } from '../types/generic';
/**
 * Check if the value is a boolean.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBoolean<T extends boolean>(value: unknown): value is Asserted<T>;
