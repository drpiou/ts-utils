import { Asserted } from '../types/generic';
import isDate from './isDate';
import isDateString from './isDateString';
import isNumberValid from './isNumberValid';

/**
 * Check if the value is datable.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDatable<T extends Date | number | string>(value: unknown): value is Asserted<T> {
  return isDate(value) || isDateString(value) || isNumberValid(value);
}
