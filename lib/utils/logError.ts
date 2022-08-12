import log from './log';

/**
 * Log error in the console the params.
 *
 * @param params Parameters to log.
 * @returns void
 */
const logError = (...params: [string, ...unknown[]]): void => {
  log('\x1b[31m%s\x1b[0m', ...params);
};

export default logError;
