import { Asserted } from '../types/generic';
import isNumber from './isNumber';

/**
 * ...
 *
 * @param value Value.
 */
export default function isBooleanNumber<T extends 0 | 1>(value: unknown): value is Asserted<T> {
  return isNumber(value) && (value === 1 || value === 0);
}
