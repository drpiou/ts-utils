'use strict';

import { every } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'every', () => {
    const source = ['a', 'b', 1];

    const result = every(source, (value) => typeof value === 'string');

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: false });
  });
};
