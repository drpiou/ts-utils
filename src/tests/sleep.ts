'use strict';

import { sleep } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'sleep', async () => {
    const from = Date.now();

    await sleep(0.1);

    const time = Date.now() - from;

    const result = time >= 99;

    testThis(result, true);
  });
};
