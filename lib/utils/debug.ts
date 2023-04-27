import log from './log';
import logError from './logError';
import logInfo from './logInfo';
import logWarn from './logWarn';

export type DebugOptions = {
  active: boolean;
  transform: (param: unknown) => unknown;
};

const DEFAULT_OPTIONS: DebugOptions = {
  active: true,
  transform: (param: unknown): unknown => {
    return typeof param === 'object' ? JSON.parse(JSON.stringify(param)) : param;
  },
};

/**
 * Debug provides a wrapper around log utilities.
 *
 * @returns Debug
 */
export default class Debug {
  private readonly options: DebugOptions;

  constructor(options?: Partial<DebugOptions>) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /**
   * Active or inactive le log.
   *
   * @param active Active log.
   * @returns void
   */
  setActive(active: boolean): void {
    this.options.active = active;
  }

  /**
   * Set the transform callback applied to every parameter.
   *
   * @param transform Transform callback.
   * @returns void
   */
  setTransform(transform: (param: unknown) => unknown): void {
    this.options.transform = transform;
  }

  /**
   * Log in the console the params.
   *
   * @param method Log method.
   * @param params Parameters to log.
   * @returns void
   */
  private debug(method: (...params: any) => void, params: unknown[]): void {
    if (this.options.active) {
      method(...params.map(this.options.transform));
    }
  }

  /**
   * Log in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  log(...params: unknown[]): void {
    this.debug(log, params);
  }

  /**
   * Log info in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  info(...params: [string, ...unknown[]]): void {
    this.debug(logInfo, params);
  }

  /**
   * Log warn in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  warn(...params: [string, ...unknown[]]): void {
    this.debug(logWarn, params);
  }

  /**
   * Log error in the console the params.
   *
   * @param params Parameters to log.
   * @returns void
   */
  error(...params: [string, ...unknown[]]): void {
    this.debug(logError, params);
  }
}
