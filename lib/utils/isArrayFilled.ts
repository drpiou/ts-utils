import { Asserted } from '../types/generic';
import isArray from './isArray';

/**
 * ...
 *
 * @param value Value.
 */
export default function isArrayFilled<T>(value: unknown): value is Asserted<T[]> {
  return isArray(value) && value.length >= 1;
}
