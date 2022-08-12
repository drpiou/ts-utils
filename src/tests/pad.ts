'use strict';

import { pad } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'pad', () => {
    const source = ['a', 'b', 1];

    const resultA = pad(source, 6, 0);
    const resultB = pad(source, -6, 0);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ resultA, expect: ['a', 'b', 1, 0, 0, 0] });
    expect({ resultB, expect: [0, 0, 0, 'a', 'b', 1] });
  });
};
