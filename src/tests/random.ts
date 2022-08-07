'use strict';

import { random } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'random', () => {
    const source = ['a', 'b', 1];

    const resultA = random(source);
    const resultB = random(source, 2);

    testThis(source, ['a', 'b', 1]);
    testThis(resultA.length, 1);
    testThis(resultB.length, 2);
  });
};
