import asserts from './asserts';
import isBooleanString from './isBooleanString';

/**
 * Assert the value is a boolean string.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertBooleanString<T extends 'true' | 'false'>(value: unknown, message?: string): asserts value is T {
  asserts(isBooleanString(value), message);
}
