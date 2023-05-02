import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isNumber<T extends number>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Number || typeof value === 'number');
}
