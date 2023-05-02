import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isString<T extends string>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof String || typeof value === 'string');
}
