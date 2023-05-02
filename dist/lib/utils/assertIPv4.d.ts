/**
 * Assert the value is an IPv4.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertIPv4<T extends string>(value: unknown, message?: string): asserts value is T;
