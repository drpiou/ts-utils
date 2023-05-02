import { expect, test } from 'vitest';
import usleep from './usleep';

test('usleep', async () => {
  const from = Date.now();

  await usleep(100);

  const time = Date.now() - from;

  const result = time >= 99;

  expect(result).toBe(true);
});
