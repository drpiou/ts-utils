'use strict';

import { pushUniq } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'pushUniq', () => {
    const source = ['a', 'b', 1];

    const result = pushUniq(source, 'a', 'z', 2);

    testThis(source, ['a', 'b', 1, 'z', 2]);
    testThis(result, ['a', 'b', 1, 'z', 2]);
  });
};
