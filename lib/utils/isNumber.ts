import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is a number.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isNumber<T extends number>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Number || typeof value === 'number');
}
