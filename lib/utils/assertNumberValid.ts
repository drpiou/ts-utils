import asserts from './asserts';
import isNumberValid from './isNumberValid';

/**
 * Assert the value is a valid number.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertNumberValid<T extends number>(value: unknown, message?: string): asserts value is T {
  asserts(isNumberValid(value), message);
}
