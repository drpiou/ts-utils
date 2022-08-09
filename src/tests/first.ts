'use strict';

import { first } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'first', () => {
    const source = ['a', 'b', 1];

    const resultA = first(source);
    const resultB = first(source, (value) => typeof value === 'number');

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ resultA, expect: 'a' });
    testThis({ resultB, expect: 1 });
  });
};
