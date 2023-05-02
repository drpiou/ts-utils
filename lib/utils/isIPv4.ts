import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * Check if the value is an IPv4.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isIPv4<T extends string>(value: unknown): value is Asserted<T> {
  const pattern =
    /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return isString(value) && pattern.test(value);
}
