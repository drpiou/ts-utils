'use strict';

import { sort } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'sort', () => {
    const source = ['b', 1, 'a', 3, 2];

    const resultA = sort(source);
    const resultB = sort(source, true);

    testThis(source, ['b', 'a', 3, 2, 1]);
    testThis(resultA, ['b', 'a', 3, 2, 1]);
    testThis(resultB, ['b', 'a', 3, 2, 1]);
  });
};
