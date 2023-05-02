/**
 * Await x milliseconds.
 *
 * @param milliseconds Milliseconds to await.
 * @returns void
 */
export default function usleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
