'use strict';

import { every } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'every', () => {
    const source = ['a', 'b', 1];

    const result = every(source, (value) => typeof value === 'string');

    testThis(source, ['a', 'b', 1]);
    testThis(result, false);
  });
};
