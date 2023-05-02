import asserts from './asserts';
import isFunction from './isFunction';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertFunction<T extends (...args: any[]) => any>(value: unknown, message?: string): asserts value is T {
  asserts(isFunction(value), message);
}
