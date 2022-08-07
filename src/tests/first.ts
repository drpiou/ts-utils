'use strict';

import { first } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'first', () => {
    const source = ['a', 'b', 1];

    const resultA = first(source);
    const resultB = first(source, (value) => typeof value === 'number');

    testThis(source, ['a', 'b', 1]);
    testThis(resultA, 'a');
    testThis(resultB, 1);
  });
};
