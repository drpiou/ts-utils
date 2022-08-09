'use strict';

import { uniqBy } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniqBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }];

    const result = uniqBy(source, 'a');

    testThis({ source, expect: [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }] });
    testThis({ result, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }] });
  });
};
