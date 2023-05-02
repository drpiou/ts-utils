import _isPlainObject from 'lodash/isPlainObject';
import { Asserted, PlainObject } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * Check if the value is a plain object.
 *
 * @param value Value.
 * @returns boolean
 */
export default function isPlainObject<T extends PlainObject>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && _isPlainObject(value);
}
