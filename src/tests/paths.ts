'use strict';

import { paths } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'paths', () => {
    const source = { a: 1, b: { c: 2 } };

    const result = paths(source);

    testThis({ source, expect: { a: 1, b: { c: 2 } } });
    testThis({ result, expect: ['a', 'b', 'b.c'] });
  });
};
