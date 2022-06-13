/**
 * Await x milliseconds.
 *
 * @param milliseconds Milliseconds to await.
 * @returns void
 */
const usleep = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export default usleep;
