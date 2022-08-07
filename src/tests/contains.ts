'use strict';

import { contains } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'contains', () => {
    const source = ['a', 'b', 1];

    const resultTrue = contains(source, (value) => value === 'b');
    const resultFalse = contains(source, (value) => value === 5);

    testThis(source, ['a', 'b', 1]);
    testThis(resultTrue, true);
    testThis(resultFalse, false);
  });
};
