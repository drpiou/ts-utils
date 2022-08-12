'use strict';

import { uniq } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'uniq', () => {
    const source = ['a', 'b', 'a', 1];

    const result = uniq(source);

    expect({ source, expect: ['a', 'b', 'a', 1] });
    expect({ result, expect: ['a', 'b', 1] });
  });
};
