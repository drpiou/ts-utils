'use strict';

import { prepend } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'prepend', () => {
    const source = ['a', 'b', 1];

    const result = prepend(source, 'a', 'z', 2);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: ['a', 'z', 2, 'a', 'b', 1] });
  });
};
