'use strict';

import { take } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'take', () => {
    const source = ['a', 'b', 1];

    const result = take(source, 2);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: ['a', 'b'] });
  });
};
