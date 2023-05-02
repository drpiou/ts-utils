import asserts from './asserts';
import isDateString from './isDateString';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDateString<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isDateString(value), message);
}
