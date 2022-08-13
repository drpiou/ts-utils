'use strict';

import { entries } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'entries', () => {
    const source = ['a', 'b', 1];

    const result = entries(source);

    expect({ source, expect: ['a', 'b', 1] });
    expect({
      result,
      expect: [
        [0, 'a'],
        [1, 'b'],
        [2, 1],
      ],
    });
  });
};
