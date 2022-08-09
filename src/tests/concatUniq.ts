'use strict';

import { concatUniq } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'concatUniq', () => {
    const source = ['a', 'b', 1];

    const result = concatUniq(source, ['a', 'z'], [2]);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: ['a', 'b', 1, 'z', 2] });
  });
};
