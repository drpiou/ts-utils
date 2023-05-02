import asserts from './asserts';
import isUUID, { isUUIDVersion } from './isUUID';

/**
 * ...
 *
 * @param value Value.
 * @param version UUID version.
 * @param message Error message.
 */
export default function assertUUID<T extends string>(
  value: unknown,
  version?: isUUIDVersion,
  message?: string,
): asserts value is T {
  asserts(isUUID(value, version), message);
}
