'use strict';

import { paths } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'paths', () => {
    const source = { a: 1, b: { c: 2 } };

    const result = paths(source);

    testThis(source, { a: 1, b: { c: 2 } });
    testThis(result, ['a', 'b', 'b.c']);
  });
};
