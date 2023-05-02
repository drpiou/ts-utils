import asserts from './asserts';
import isUUID, { IsUUIDVersion } from './isUUID';

/**
 * Assert the value is a uuid.
 *
 * @param value Value.
 * @param version UUID version.
 * @param message Error message.
 */
export default function assertUUID<T extends string>(
  value: unknown,
  version?: IsUUIDVersion,
  message?: string,
): asserts value is T {
  asserts(isUUID(value, version), message);
}
