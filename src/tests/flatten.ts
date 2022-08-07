'use strict';

import { flatten } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'flatten', () => {
    const source = ['a', 'b', [1], [['c', 2]]];

    const resultA = flatten(source);
    const resultB = flatten(source, true);

    testThis(source, ['a', 'b', [1], [['c', 2]]]);
    testThis(resultA, ['a', 'b', 1, ['c', 2]]);
    testThis(resultB, ['a', 'b', 1, 'c', 2]);
  });
};
