'use strict';

import { uniqBy } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniqBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }];

    const result = uniqBy(source, 'a');

    expect({ source, expect: [{ a: 'a' }, { a: 'b' }, { a: 'a' }, { a: 1 }] });
    expect({ result, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }] });
  });
};
