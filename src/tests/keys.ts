'use strict';

import { keys } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'keys', () => {
    const source = ['a', 'b', 1];

    const result = keys(source);

    testThis(source, ['a', 'b', 1]);
    testThis(result, [0, 1, 2]);
  });
};
