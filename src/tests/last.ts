'use strict';

import { last } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'last', () => {
    const source = ['a', 'b', 1];

    const resultA = last(source);
    const resultB = last(source, (value) => typeof value === 'string');

    testThis(source, ['a', 'b', 1]);
    testThis(resultA, 1);
    testThis(resultB, 'b');
  });
};
