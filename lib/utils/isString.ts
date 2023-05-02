import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is a string.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isString<T extends string>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof String || typeof value === 'string');
}
