import { Asserted } from '../types/generic';
/**
 * Check if the value is datable.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDatable<T extends Date | number | string>(value: unknown): value is Asserted<T>;
