import usleep from './usleep';

/**
 * Await x seconds.
 *
 * @param seconds Seconds to await.
 * @returns void
 */
const sleep = (seconds: number): Promise<void> => {
  return usleep(seconds * 1000);
};

export default sleep;
