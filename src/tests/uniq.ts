'use strict';

import { uniq } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniq', () => {
    const source = ['a', 'b', 'a', 1];

    const result = uniq(source);

    testThis(source, ['a', 'b', 'a', 1]);
    testThis(result, ['a', 'b', 1]);
  });
};
