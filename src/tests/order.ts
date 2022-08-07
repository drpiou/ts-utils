'use strict';

import { order } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'order', () => {
    const source = ['b', 1, 'a', 3, 2];

    const resultA = order(source);
    const resultB = order(source, true);

    testThis(source, ['b', 1, 'a', 3, 2]);
    testThis(resultA, [1, 2, 3, 'a', 'b']);
    testThis(resultB, ['b', 'a', 3, 2, 1]);
  });
};
