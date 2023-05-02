import asserts from './asserts';
import isArrayFilled from './isArrayFilled';

/**
 * Assert the value is an array filled.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertArrayFilled<T extends any[]>(value: unknown, message?: string): asserts value is T {
  asserts(isArrayFilled(value), message);
}
