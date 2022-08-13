'use strict';

import { orderBy } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'orderBy', () => {
    const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

    const resultA = orderBy(source, 'a');
    const resultB = orderBy(source, 'a', true);

    expect({ source, expect: [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }] });
    expect({ resultA, expect: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 'a' }, { a: 'b' }] });
    expect({ resultB, expect: [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }] });
  });
};
