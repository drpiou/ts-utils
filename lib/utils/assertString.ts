import asserts from './asserts';
import isString from './isString';

/**
 * Assert the value is a string.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertString<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isString(value), message);
}
