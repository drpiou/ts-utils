import { Asserted } from '../types/generic';
import isDate from './isDate';

/**
 * Check if the value is a valid date.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDateValid<T extends Date>(value: unknown): value is Asserted<T> {
  return isDate(value) && value.getTime() > 0;
}
