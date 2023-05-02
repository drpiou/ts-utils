import asserts from './asserts';
import isPhone from './isPhone';

/**
 * Assert the value is a phone.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertPhone<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isPhone(value), message);
}
