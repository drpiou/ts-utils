'use strict';

import { chunk } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'chunk', () => {
    const source = ['a', 'b', 1];

    const result = chunk(source, 2);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: [['a', 'b'], [1]] });
  });
};
