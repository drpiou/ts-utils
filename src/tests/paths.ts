'use strict';

import { paths } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'paths', () => {
    const source = { a: 1, b: { c: 2 } };

    const resultA = paths(source);
    const resultB = paths(source, { finite: false });

    expect({ source, expect: { a: 1, b: { c: 2 } } });
    expect({ resultA, expect: ['a', 'b', 'b.c'] });
    expect({ resultB, expect: ['a', 'b.c'] });
  });
};
