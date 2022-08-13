'use strict';

import { sort } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'sort', () => {
    const source = ['b', 1, 'a', 3, 2];

    const resultA = sort(source);
    const resultB = sort(source, true);

    expect({ source, expect: ['b', 'a', 3, 2, 1] });
    expect({ resultA, expect: ['b', 'a', 3, 2, 1] });
    expect({ resultB, expect: ['b', 'a', 3, 2, 1] });
  });
};
