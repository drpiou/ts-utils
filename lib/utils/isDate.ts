import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isDate<T extends Date>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && value instanceof Date;
}
