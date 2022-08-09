'use strict';

import { clone } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'clone', () => {
    const source = ['a', 'b', 1];

    const result = clone(source);

    source.push(2);
    result.push(3);

    testThis({ source, expect: ['a', 'b', 1, 2] });
    testThis({ result, expect: ['a', 'b', 1, 3] });
  });
};
