'use strict';

import { pad } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'pad', () => {
    const source = ['a', 'b', 1];

    const resultA = pad(source, 6, 0);
    const resultB = pad(source, -6, 0);

    testThis(source, ['a', 'b', 1]);
    testThis(resultA, ['a', 'b', 1, 0, 0, 0]);
    testThis(resultB, [0, 0, 0, 'a', 'b', 1]);
  });
};
