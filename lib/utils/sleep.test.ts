import { expect, test } from 'vitest';
import sleep from './sleep';

test('sleep', async () => {
  const from = Date.now();

  await sleep(0.1);

  const time = Date.now() - from;

  const result = time >= 99;

  expect(result).toBe(true);
});
