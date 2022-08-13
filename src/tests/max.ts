'use strict';

import { max } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'max', () => {
    const sourceA = ['a', 'b', 1, 2];
    const sourceB = [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }];

    const resultA = max(sourceA);
    const resultB = max(sourceB, 'a');

    expect({ sourceA, expect: ['a', 'b', 1, 2] });
    expect({ sourceB, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }, { a: 2 }] });
    expect({ resultA, expect: 2 });
    expect({ resultB, expect: 2 });
  });
};
