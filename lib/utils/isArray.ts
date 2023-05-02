import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is an array.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isArray<T>(value: unknown): value is Asserted<T[]> {
  return isAsserted(value) && Array.isArray(value);
}
