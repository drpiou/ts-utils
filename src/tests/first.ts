'use strict';

import { first } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'first', () => {
    const source = ['a', 'b', 1];

    const resultA = first(source);
    const resultB = first(source, (value) => typeof value === 'number');

    expect({ source, expect: ['a', 'b', 1] });
    expect({ resultA, expect: 'a' });
    expect({ resultB, expect: 1 });
  });
};
