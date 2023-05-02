import { Asserted } from '../types/generic';
/**
 * Check if the value is an e-mail.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isEmail<T extends string>(value: unknown): value is Asserted<T>;
