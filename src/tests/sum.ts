'use strict';

import { sum } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'sum', () => {
    const sourceA = ['a', 'b', 1, 2];
    const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    const resultA = sum(sourceA);
    const resultB = sum(sourceB, 'a');

    testThis(sourceA, ['a', 'b', 1, 2]);
    testThis(sourceB, [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }]);
    testThis(resultA, 3);
    testThis(resultB, 3);
  });
};
