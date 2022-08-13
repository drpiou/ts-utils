'use strict';

import { clone } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'clone', () => {
    const source = ['a', 'b', 1];

    const result = clone(source);

    source.push(2);
    result.push(3);

    expect({ source, expect: ['a', 'b', 1, 2] });
    expect({ result, expect: ['a', 'b', 1, 3] });
  });
};
