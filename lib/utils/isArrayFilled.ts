import { Asserted } from '../types/generic';
import isArray from './isArray';

/**
 * Check if the value is an array filled.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isArrayFilled<T>(value: unknown): value is Asserted<T[]> {
  return isArray(value) && value.length >= 1;
}
