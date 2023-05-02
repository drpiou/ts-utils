import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * ...
 *
 * @param value Value.
 */
export default function isBooleanString<T extends 'true' | 'false'>(value: unknown): value is Asserted<T> {
  return isString(value) && (value === 'true' || value === 'false');
}
