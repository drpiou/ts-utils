import asserts from './asserts';
import isDateValid from './isDateValid';

/**
 * Assert the value is a valid date.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDateValid<T extends Date>(value: unknown, message?: string): asserts value is T {
  asserts(isDateValid(value), message);
}
