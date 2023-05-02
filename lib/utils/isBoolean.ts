import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isBoolean<T extends boolean>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Boolean || typeof value === 'boolean');
}
