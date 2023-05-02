import _isPlainObject from 'lodash/isPlainObject';
import { Asserted, PlainObject } from '../types/generic';
import isAsserted from './isAsserted';

/**
 * ...
 *
 * @param value Value.
 */
export default function isPlainObject<T extends PlainObject>(value: unknown): value is Asserted<T> {
  return isAsserted(value) && _isPlainObject(value);
}
