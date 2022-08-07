'use strict';

import { sortBy } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'sortBy', () => {
    const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

    const resultA = sortBy(source, 'a');
    const resultB = sortBy(source, 'a', true);

    testThis(source, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
    testThis(resultA, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
    testThis(resultB, [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }]);
  });
};
