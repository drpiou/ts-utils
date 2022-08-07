'use strict';

import { concatUniq } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'concatUniq', () => {
    const source = ['a', 'b', 1];

    const result = concatUniq(source, ['a', 'z'], [2]);

    testThis(source, ['a', 'b', 1]);
    testThis(result, ['a', 'b', 1, 'z', 2]);
  });
};
