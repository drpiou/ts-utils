import log from './log';

/**
 * Log info in the console the params.
 *
 * @param params Parameters to log.
 * @returns void
 */
export default function logInfo(...params: unknown[]): void {
  log('\x1b[36m%s\x1b[0m', ...params);
}
