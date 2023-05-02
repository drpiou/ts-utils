export const assertsMessage = 'The result of the asserted value is false.';

/**
 * Asserts the condition.
 *
 * @param condition Condition.
 * @param message Error message.
 */
export default function asserts(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new TypeError(message || assertsMessage);
  }
}
