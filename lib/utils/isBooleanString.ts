import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * Check if the value is boolean string.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBooleanString<T extends 'true' | 'false'>(value: unknown): value is Asserted<T> {
  return isString(value) && (value === 'true' || value === 'false');
}
