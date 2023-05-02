import { Asserted } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is a date.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDate<T extends Date>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && value instanceof Date;
}
