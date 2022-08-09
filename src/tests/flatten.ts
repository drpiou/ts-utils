'use strict';

import { flatten } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'flatten', () => {
    const source = ['a', 'b', [1], [['c', 2]]];

    const resultA = flatten(source);
    const resultB = flatten(source, true);

    testThis({ source, expect: ['a', 'b', [1], [['c', 2]]] });
    testThis({ resultA, expect: ['a', 'b', 1, ['c', 2]] });
    testThis({ resultB, expect: ['a', 'b', 1, 'c', 2] });
  });
};
