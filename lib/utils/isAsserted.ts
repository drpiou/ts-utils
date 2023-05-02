import { Asserted } from '../types/generic';

/**
 * ...
 *
 * @param value Value.
 */
export default function isAsserted<T>(value: T): value is Asserted<T> {
  return [null, undefined].indexOf(value as never) === -1;
}
