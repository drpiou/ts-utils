'use strict';

import { entries } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'entries', () => {
    const source = ['a', 'b', 1];

    const result = entries(source);

    testThis(source, ['a', 'b', 1]);
    testThis(result, [
      [0, 'a'],
      [1, 'b'],
      [2, 1],
    ]);
  });
};
