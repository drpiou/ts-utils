'use strict';

import { uniqBy } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniqBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }];

    const result = uniqBy(source, 'a');

    testThis(source, [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }]);
    testThis(result, [{ a: 'a' }, { a: 'b' }, { a: 1 }]);
  });
};
