import log from './log';

/**
 * Log warn in the console the params.
 *
 * @param params Parameters to log.
 * @returns void
 */
const logWarn = (...params: [string, ...unknown[]]): void => {
  log('\x1b[33m%s\x1b[0m', ...params);
};

export default logWarn;
