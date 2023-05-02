import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * Check if the value is a date string.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isDateString<T extends string>(value: unknown): value is Asserted<T> {
  const patternDate = /^(?:\d{4})-(?:\d{2})-(?:\d{2})$/;
  const patternDateIso = /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/;

  return isString(value) && (patternDate.test(value) || patternDateIso.test(value));
}
