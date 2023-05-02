import { PlainObject } from '../types/generic';
import asserts from './asserts';
import isPlainObject from './isPlainObject';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertPlainObject<T extends PlainObject>(value: unknown, message?: string): asserts value is T {
  asserts(isPlainObject(value), message);
}
