import { Asserted } from '../types/generic';
/**
 * Check if the value is IPv6.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isIPv6<T extends string>(value: unknown): value is Asserted<T>;
