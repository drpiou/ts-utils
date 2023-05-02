import asserts from './asserts';
import isBooleanNumber from './isBooleanNumber';

/**
 * ...
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertBooleanNumber<T extends 0 | 1>(value: unknown, message?: string): asserts value is T {
  asserts(isBooleanNumber(value), message);
}
