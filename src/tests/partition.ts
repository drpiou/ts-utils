'use strict';

import { partition } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'partition', () => {
    const source = ['a', 'b', 1];

    const result = partition(source, (value) => value === 'b');

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: [['b'], ['a', 1]] });
  });
};
