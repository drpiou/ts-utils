import { isUUIDVersion } from './isUUID';
/**
 * Assert the value is a uuid.
 *
 * @param value Value.
 * @param version UUID version.
 * @param message Error message.
 */
export default function assertUUID<T extends string>(value: unknown, version?: isUUIDVersion, message?: string): asserts value is T;
