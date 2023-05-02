/**
 * Assert the value is a number.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertNumber<T extends number>(value: unknown, message?: string): asserts value is T;
