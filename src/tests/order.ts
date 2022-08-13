'use strict';

import { order } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'order', () => {
    const source = ['b', 1, 'a', 3, 2];

    const resultA = order(source);
    const resultB = order(source, true);

    expect({ source, expect: ['b', 1, 'a', 3, 2] });
    expect({ resultA, expect: [1, 2, 3, 'a', 'b'] });
    expect({ resultB, expect: ['b', 'a', 3, 2, 1] });
  });
};
