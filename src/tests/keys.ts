'use strict';

import { keys } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'keys', () => {
    const source = ['a', 'b', 1];

    const result = keys(source);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: [0, 1, 2] });
  });
};
