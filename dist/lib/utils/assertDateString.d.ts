/**
 * Assert the value is date string.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDateString<T extends string>(value: unknown, message?: string): asserts value is T;
