'use strict';

import { order } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'order', () => {
    const source = ['b', 1, 'a', 3, 2];

    const resultA = order(source);
    const resultB = order(source, true);

    testThis({ source, expect: ['b', 1, 'a', 3, 2] });
    testThis({ resultA, expect: [1, 2, 3, 'a', 'b'] });
    testThis({ resultB, expect: ['b', 'a', 3, 2, 1] });
  });
};
