'use strict';

import { prepend } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'prepend', () => {
    const source = ['a', 'b', 1];

    const result = prepend(source, 'a', 'z', 2);

    testThis(source, ['a', 'b', 1]);
    testThis(result, ['a', 'z', 2, 'a', 'b', 1]);
  });
};
