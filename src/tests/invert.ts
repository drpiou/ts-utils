'use strict';

import { invert } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'invert', () => {
    const source = ['a', 'b', 1];

    const result = invert(source);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: [1, 'b', 'a'] });
  });
};
