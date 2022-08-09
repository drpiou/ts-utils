'use strict';

import { entries } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'entries', () => {
    const source = ['a', 'b', 1];

    const result = entries(source);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({
      result,
      expect: [
        [0, 'a'],
        [1, 'b'],
        [2, 1],
      ],
    });
  });
};
