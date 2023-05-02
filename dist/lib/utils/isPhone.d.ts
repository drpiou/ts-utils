import { Asserted } from '../types/generic';
/**
 * Check if the value is a phone.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isPhone<T extends string>(value: unknown): value is Asserted<T>;
