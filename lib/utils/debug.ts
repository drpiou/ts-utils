import log from './log';
import logError from './logError';
import logInfo from './logInfo';
import logWarn from './logWarn';

export type DebugOptions = {
  active: boolean;
  transform: (param: unknown) => unknown;
};

/**
 * Debug provides a wrapper around log utilities.
 *
 * @returns Debug
 */
export default class Debug {
  #active: DebugOptions['active'] = true;

  #transform: DebugOptions['transform'] = (param) => param;

  /**
   * Active or inactive le log.
   *
   * @param active Active log.
   * @returns void
   */
  setActive(active: boolean): void {
    this.#active = active;
  }

  /**
   * Set the transform callback applied to every parameter.
   *
   * @param transform Transform callback.
   * @returns void
   */
  setTransform(transform: (param: unknown) => unknown): void {
    this.#transform = transform;
  }

  /**
   * Log in the console the params.
   *
   * @param method Log method.
   * @param params Parameters to log.
   * @returns void
   */
  #debug(method: (...params: any) => void, params: unknown[]): void {
    if (this.#active) {
      method(...params.map(this.#transform));
    }
  }

  /**
   * Log in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  log(...params: unknown[]): void {
    this.#debug(log, params);
  }

  /**
   * Log info in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  info(...params: unknown[]): void {
    this.#debug(logInfo, params);
  }

  /**
   * Log warn in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  warn(...params: unknown[]): void {
    this.#debug(logWarn, params);
  }

  /**
   * Log error in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  error(...params: unknown[]): void {
    this.#debug(logError, params);
  }
}
