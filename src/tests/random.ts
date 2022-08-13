'use strict';

import { random } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'random', () => {
    const source = ['a', 'b', 1];

    const resultA = random(source);
    const resultB = random(source, 2);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ resultA: resultA.length, expect: 1 });
    expect({ resultB: resultB.length, expect: 2 });
  });
};
