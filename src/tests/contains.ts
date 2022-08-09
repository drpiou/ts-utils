'use strict';

import { contains } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'contains', () => {
    const source = ['a', 'b', 1];

    const resultTrue = contains(source, (value) => value === 'b');
    const resultFalse = contains(source, (value) => value === 5);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ resultTrue, expect: true });
    testThis({ resultFalse, expect: false });
  });
};
