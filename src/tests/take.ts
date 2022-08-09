'use strict';

import { take } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'take', () => {
    const source = ['a', 'b', 1];

    const result = take(source, 2);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: ['a', 'b'] });
  });
};
