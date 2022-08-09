'use strict';

import { random } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'random', () => {
    const source = ['a', 'b', 1];

    const resultA = random(source);
    const resultB = random(source, 2);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ resultA: resultA.length, expect: 1 });
    testThis({ resultB: resultB.length, expect: 2 });
  });
};
