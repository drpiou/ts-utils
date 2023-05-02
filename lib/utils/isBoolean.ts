import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is a boolean.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBoolean<T extends boolean>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Boolean || typeof value === 'boolean');
}
