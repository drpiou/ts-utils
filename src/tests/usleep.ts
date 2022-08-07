'use strict';

import { usleep } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'usleep', async () => {
    const from = Date.now();

    await usleep(100);

    const time = Date.now() - from;

    const result = time >= 99;

    testThis(result, true);
  });
};
