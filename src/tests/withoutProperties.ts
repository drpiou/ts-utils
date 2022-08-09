'use strict';

import { withoutProperties } from '../../lib';
import { test, testThis } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'withoutProperties', () => {
    const source = { a: 1, b: 2 };

    const result = withoutProperties(source, ['b']);

    testThis({ source, expect: { a: 1, b: 2 } });
    testThis({ result, expect: { a: 1 } });
  });
};
