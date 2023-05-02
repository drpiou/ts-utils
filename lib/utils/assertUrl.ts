import asserts from './asserts';
import isUrl from './isUrl';

/**
 * ...
 *
 * @param value Value.
 * @param protocols Url protocols.
 * @param message Error message.
 */
export default function assertUrl<T extends string>(
  value: unknown,
  protocols?: string | string[],
  message?: string,
): asserts value is T {
  asserts(isUrl(value, protocols), message);
}
