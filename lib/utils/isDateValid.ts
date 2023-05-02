import { Asserted } from '../types/generic';
import isDate from './isDate';

/**
 * ...
 *
 * @param value Value.
 */
export default function isDateValid<T extends Date>(value: unknown): value is Asserted<T> {
  return isDate(value) && value.getTime() > 0;
}
