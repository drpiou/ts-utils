'use strict';

import { every } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'every', () => {
    const source = ['a', 'b', 1];

    const result = every(source, (value) => typeof value === 'string');

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: false });
  });
};
