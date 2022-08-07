'use strict';

import { invert } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'invert', () => {
    const source = ['a', 'b', 1];

    const result = invert(source);

    testThis(source, ['a', 'b', 1]);
    testThis(result, [1, 'b', 'a']);
  });
};
