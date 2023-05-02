/**
 * Assert the value is a boolean like.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertBooleanLike<T extends boolean | 'true' | 'false' | 0 | 1>(value: unknown, message?: string): asserts value is T;
