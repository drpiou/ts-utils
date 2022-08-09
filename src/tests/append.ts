'use strict';

import { append } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'append', () => {
    const source = ['a', 'b', 1];

    const result = append(source, 'a', 'z', 2);

    testThis({ source, expect: ['a', 'b', 1] });
    testThis({ result, expect: ['a', 'b', 1, 'a', 'z', 2] });
  });
};
