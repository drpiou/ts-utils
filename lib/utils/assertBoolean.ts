import asserts from './asserts';
import isBoolean from './isBoolean';

/**
 * Assert the value is a boolean.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertBoolean<T extends boolean>(value: unknown, message?: string): asserts value is T {
  asserts(isBoolean(value), message);
}
