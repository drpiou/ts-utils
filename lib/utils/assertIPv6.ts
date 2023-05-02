import asserts from './asserts';
import isIPv6 from './isIPv6';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertIPv6<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isIPv6(value), message);
}
