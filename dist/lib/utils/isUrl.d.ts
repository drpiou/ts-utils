import { Asserted } from '../types/generic';
/**
 * Check if the value is an url.
 *
 * @param value Value.
 * @param starts Value.
 * @returns boolean
 */
export default function isUrl<T extends string>(value: unknown, starts?: string | string[]): value is Asserted<T>;
