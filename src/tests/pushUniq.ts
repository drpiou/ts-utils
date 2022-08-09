'use strict';

import { pushUniq } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'pushUniq', () => {
    const source = ['a', 'b', 1];

    const result = pushUniq(source, 'a', 'z', 2);

    testThis({ source, expect: ['a', 'b', 1, 'z', 2] });
    testThis({ result, expect: ['a', 'b', 1, 'z', 2] });
  });
};
