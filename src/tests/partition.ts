'use strict';

import { partition } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'partition', () => {
    const source = ['a', 'b', 1];

    const result = partition(source, (value) => value === 'b');

    testThis(source, ['a', 'b', 1]);
    testThis(result, [['b'], ['a', 1]]);
  });
};
