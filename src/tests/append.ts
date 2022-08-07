'use strict';

import { append } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'append', () => {
    const source = ['a', 'b', 1];

    const result = append(source, 'a', 'z', 2);

    testThis(source, ['a', 'b', 1]);
    testThis(result, ['a', 'b', 1, 'a', 'z', 2]);
  });
};
