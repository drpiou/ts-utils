'use strict';

import { keys } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'keys', () => {
    const source = ['a', 'b', 1];

    const result = keys(source);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: [0, 1, 2] });
  });
};
