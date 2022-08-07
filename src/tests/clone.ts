'use strict';

import { clone } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'clone', () => {
    const source = ['a', 'b', 1];

    const result = clone(source);

    source.push(2);
    result.push(3);

    testThis(source, ['a', 'b', 1, 2]);
    testThis(result, ['a', 'b', 1, 3]);
  });
};
