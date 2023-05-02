import { Asserted } from '../types/generic';
import isNumber from './isNumber';

/**
 * ...
 *
 * @param value Value.
 */
export default function isNumberValid<T extends number>(value: unknown): value is Asserted<T> {
  return isNumber(value) && !isNaN(value);
}
