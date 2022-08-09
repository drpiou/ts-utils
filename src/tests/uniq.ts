'use strict';

import { uniq } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniq', () => {
    const source = ['a', 'b', 'a', 1];

    const result = uniq(source);

    testThis({ source, expect: ['a', 'b', 'a', 1] });
    testThis({ result, expect: ['a', 'b', 1] });
  });
};
