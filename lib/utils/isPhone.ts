import { Asserted } from '../types/generic';
import isString from './isString';

/**
 * Check if the value is a phone.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isPhone<T extends string>(value: unknown): value is Asserted<T> {
  const pattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  return isString(value) && pattern.test(value);
}
