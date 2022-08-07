'use strict';

import { take } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'take', () => {
    const source = ['a', 'b', 1];

    const result = take(source, 2);

    testThis(source, ['a', 'b', 1]);
    testThis(result, ['a', 'b']);
  });
};
