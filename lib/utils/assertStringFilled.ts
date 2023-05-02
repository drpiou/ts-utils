import asserts from './asserts';
import isStringFilled from './isStringFilled';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertStringFilled<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isStringFilled(value), message);
}
