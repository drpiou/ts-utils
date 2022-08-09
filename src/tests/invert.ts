'use strict';

import { invert } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'invert', () => {
    const source = ['a', 'b', 1];

    const result = invert(source);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: [1, 'b', 'a'] });
  });
};
