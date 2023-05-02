import asserts from './asserts';
import isDate from './isDate';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDate<T extends Date>(value: unknown, message?: string): asserts value is T {
  asserts(isDate(value), message);
}
