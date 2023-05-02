import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isFunction<T extends (...args: any[]) => any>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && (value instanceof Function || typeof value === 'function');
}
