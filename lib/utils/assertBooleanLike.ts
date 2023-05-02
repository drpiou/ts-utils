import asserts from './asserts';
import isBooleanLike from './isBooleanLike';

/**
 * Assert the value is a boolean like.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(
  value: unknown,
  message?: string,
): asserts value is T {
  asserts(isBooleanLike(value), message);
}
