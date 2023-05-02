/**
 * Assert the value is an array.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertArray<T extends any[]>(value: unknown, message?: string): asserts value is T;
