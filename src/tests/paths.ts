'use strict';

import { paths } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'paths', () => {
    const source = { a: 1, b: { c: 2 } };

    const result = paths(source);

    expect({ source, expect: { a: 1, b: { c: 2 } } });
    expect({ result, expect: ['a', 'b', 'b.c'] });
  });
};
