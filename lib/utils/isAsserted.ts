import { Asserted } from '../types/generic';

/**
 * Check if the value is asserted.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isAsserted<T>(value: T): value is Asserted<T> {
  return [null, undefined].indexOf(value as never) === -1;
}
