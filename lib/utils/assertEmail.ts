import asserts from './asserts';
import isEmail from './isEmail';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertEmail<T extends string>(value: unknown, message?: string): asserts value is T {
  asserts(isEmail(value), message);
}
