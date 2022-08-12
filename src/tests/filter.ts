'use strict';

import { filter } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'filter', () => {
    const source = ['a', 'b', 1, null];

    const resultA = filter(source);
    const resultB = filter(source, (value) => typeof value !== 'number');

    expect({ source, expect: ['a', 'b', 1, null] });
    expect({ resultA, expect: ['a', 'b', 1] });
    expect({ resultB, expect: ['a', 'b', null] });
  });
};
