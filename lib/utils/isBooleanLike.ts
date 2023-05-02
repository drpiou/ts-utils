import { Asserted } from '../types/generic';
import isBoolean from './isBoolean';
import isBooleanNumber from './isBooleanNumber';
import isBooleanString from './isBooleanString';

/**
 * ...
 *
 * @param value Value.
 */
export default function isBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(value: unknown): value is Asserted<T> {
  return isBoolean(value) || isBooleanString(value) || isBooleanNumber(value);
}
