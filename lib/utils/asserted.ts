import asserts from './asserts';
import isAsserted from './isAsserted';

/**
 * Assert the value.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function asserted(value: unknown, message?: string): asserts value {
  asserts(isAsserted(value), message);
}
