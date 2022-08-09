'use strict';

import { min } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'min', () => {
    const sourceA = ['a', 'b', 1, 2];
    const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    const resultA = min(sourceA);
    const resultB = min(sourceB, 'a');

    testThis({ sourceA, expect: ['a', 'b', 1, 2] });
    testThis({ sourceB, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }] });
    testThis({ resultA, expect: 1 });
    testThis({ resultB, expect: 1 });
  });
};
