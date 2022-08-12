'use strict';

import { keyBy } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'keyBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }];

    const result = keyBy(source, 'a');

    expect({ source, expect: [{ a: 'a' }, { a: 'b' }, { a: 1 }] });
    expect({ result, expect: { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 } } });
  });
};
