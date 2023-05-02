/**
 * Assert the value is an e-mail.
 *
 * @param value Value.
 * @param message Error message.
 */
export default function assertEmail<T extends string>(value: unknown, message?: string): asserts value is T;
