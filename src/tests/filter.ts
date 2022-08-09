'use strict';

import { filter } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'filter', () => {
    const source = ['a', 'b', 1, null];

    const resultA = filter(source);
    const resultB = filter(source, (value) => typeof value !== 'number');

    testThis({ source, expect: ['a', 'b', 1, null] });
    testThis({ resultA, expect: ['a', 'b', 1] });
    testThis({ resultB, expect: ['a', 'b', null] });
  });
};
