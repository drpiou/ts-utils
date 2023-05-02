import { Asserted } from '../types/generic';
import isDate from './isDate';
import isNumberValid from './isNumberValid';
import isString from './isString';

/**
 * ...
 *
 * @param value Value.
 */
export default function isDatable<T extends Date | number | string>(value: unknown): value is Asserted<T> {
  return isDate(value) || isNumberValid(value) || isString(value);
}
