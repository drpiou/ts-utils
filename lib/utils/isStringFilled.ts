import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * ...
 *
 * @param value Value.
 */
export default function isStringFilled<T extends string>(value: unknown): value is Asserted<T> {
  return isString(value) && value !== '';
}
