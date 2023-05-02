import { Asserted } from '../types/generic';
import isBoolean from './isBoolean';
import isBooleanNumber from './isBooleanNumber';
import isBooleanString from './isBooleanString';

/**
 * Check if the value is boolean like.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(value: unknown): value is Asserted<T> {
  return isBoolean(value) || isBooleanString(value) || isBooleanNumber(value);
}
