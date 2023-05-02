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
    #private;
    /**
     * Active or inactive le log.
     *
     * @param active Active log.
     * @returns void
     */
    setActive(active: boolean): void;
    /**
     * Set the transform callback applied to every parameter.
     *
     * @param transform Transform callback.
     * @returns void
     */
    setTransform(transform: (param: unknown) => unknown): void;
    /**
     * Log in the console the params.
     *
     * @param params Parameters to log.
     * @returns void
     */
    log(...params: unknown[]): void;
    /**
     * Log info in the console the params.
     *
     * @param params Parameters to log.
     * @returns void
     */
    info(...params: unknown[]): void;
    /**
     * Log warn in the console the params.
     *
     * @param params Parameters to log.
     * @returns void
     */
    warn(...params: unknown[]): void;
    /**
     * Log error in the console the params.
     *
     * @param params Parameters to log.
     * @returns void
     */
    error(...params: unknown[]): void;
}
