'use strict';

import { keyBy } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'keyBy', () => {
    const source = [{ a: 'a' }, { a: 'b' }, { a: 1 }];

    const result = keyBy(source, 'a');

    testThis(source, [{ a: 'a' }, { a: 'b' }, { a: 1 }]);
    testThis(result, { a: { a: 'a' }, b: { a: 'b' }, 1: { a: 1 } });
  });
};
