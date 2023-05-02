/**
 * Assert the value is an IPv6.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertIPv6<T extends string>(value: unknown, message?: string): asserts value is T;
