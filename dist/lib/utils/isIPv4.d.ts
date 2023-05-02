import { Asserted } from '../types/generic';
/**
 * Check if the value is an IPv4.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isIPv4<T extends string>(value: unknown): value is Asserted<T>;
