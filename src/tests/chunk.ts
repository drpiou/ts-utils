'use strict';

import { chunk } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'chunk', () => {
    const source = ['a', 'b', 1];

    const result = chunk(source, 2);

    testThis(source, ['a', 'b', 1]);
    testThis(result, [['a', 'b'], [1]]);
  });
};
