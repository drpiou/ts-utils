'use strict';

import { sortBy } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'sortBy', () => {
    const source = [{ a: 'b' }, { a: 1 }, { a: 'a' }, { a: 3 }, { a: 2 }];

    const resultA = sortBy(source, 'a');
    const resultB = sortBy(source, 'a', true);

    expect({ source, expect: [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }] });
    expect({ resultA, expect: [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }] });
    expect({ resultB, expect: [{ a: 'b' }, { a: 'a' }, { a: 3 }, { a: 2 }, { a: 1 }] });
  });
};
