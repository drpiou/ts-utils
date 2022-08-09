'use strict';

import { prepend } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'prepend', () => {
    const source = ['a', 'b', 1];

    const result = prepend(source, 'a', 'z', 2);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: ['a', 'z', 2, 'a', 'b', 1] });
  });
};
