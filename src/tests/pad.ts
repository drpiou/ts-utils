'use strict';

import { pad } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'pad', () => {
    const source = ['a', 'b', 1];

    const resultA = pad(source, 6, 0);
    const resultB = pad(source, -6, 0);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ resultA, expect: ['a', 'b', 1, 0, 0, 0] });
    testThis({ resultB, expect: [0, 0, 0, 'a', 'b', 1] });
  });
};
