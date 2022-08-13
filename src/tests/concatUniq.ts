'use strict';

import { concatUniq } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'concatUniq', () => {
    const source = ['a', 'b', 1];

    const result = concatUniq(source, ['a', 'z'], [2]);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: ['a', 'b', 1, 'z', 2] });
  });
};
