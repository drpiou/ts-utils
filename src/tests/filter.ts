'use strict';

import { filter } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'filter', () => {
    const source = ['a', 'b', 1, null];

    const resultA = filter(source);
    const resultB = filter(source, (value) => typeof value !== 'number');

    testThis(source, ['a', 'b', 1, null]);
    testThis(resultA, ['a', 'b', 1]);
    testThis(resultB, ['a', 'b', null]);
  });
};
