'use strict';

import { last } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'last', () => {
    const source = ['a', 'b', 1];

    const resultA = last(source);
    const resultB = last(source, (value) => typeof value === 'string');

    expect({ source, expect: ['a', 'b', 1] });
    expect({ resultA, expect: 1 });
    expect({ resultB, expect: 'b' });
  });
};
