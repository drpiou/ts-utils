/**
 * Assert the value is a date.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertDate<T extends Date>(value: unknown, message?: string): asserts value is T;
