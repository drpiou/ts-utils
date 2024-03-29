import asserts from './asserts';
import isDatable from './isDatable';

/**
 * Assert the value is datable.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDatable<T extends Date | number | string>(value: unknown, message?: string): asserts value is T {
  asserts(isDatable(value), message);
}
