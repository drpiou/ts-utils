'use strict';

import { pushUniq } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'pushUniq', () => {
    const source = ['a', 'b', 1];

    const result = pushUniq(source, 'a', 'z', 2);

    expect({ source, expect: ['a', 'b', 1, 'z', 2] });
    expect({ result, expect: ['a', 'b', 1, 'z', 2] });
  });
};
