'use strict';

import { contains } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'contains', () => {
    const source = ['a', 'b', 1];

    const resultTrue = contains(source, (value) => value === 'b');
    const resultFalse = contains(source, (value) => value === 5);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ resultTrue, expect: true });
    expect({ resultFalse, expect: false });
  });
};
