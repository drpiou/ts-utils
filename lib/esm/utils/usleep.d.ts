/**
 * Await x milliseconds.
 *
 * @param milliseconds Milliseconds to await.
 * @returns void
 */
declare const usleep: (milliseconds: number) => Promise<void>;
export default usleep;
