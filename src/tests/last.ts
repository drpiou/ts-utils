'use strict';

import { last } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'last', () => {
    const source = ['a', 'b', 1];

    const resultA = last(source);
    const resultB = last(source, (value) => typeof value === 'string');

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ resultA, expect: 1 });
    testThis({ resultB, expect: 'b' });
  });
};
