'use strict';

import { partition } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'partition', () => {
    const source = ['a', 'b', 1];

    const result = partition(source, (value) => value === 'b');

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: [['b'], ['a', 1]] });
  });
};
