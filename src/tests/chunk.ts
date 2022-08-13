'use strict';

import { chunk } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'chunk', () => {
    const source = ['a', 'b', 1];

    const result = chunk(source, 2);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: [['a', 'b'], [1]] });
  });
};
