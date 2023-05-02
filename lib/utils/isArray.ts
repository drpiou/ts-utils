import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isArray<T>(value: unknown): value is Asserted<T[]> {
  return isAsserted(value) && Array.isArray(value);
}
