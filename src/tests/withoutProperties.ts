'use strict';

import { withoutProperties } from '../../lib';
import { test } from './test';
import { testThis } from './testThis';

export default (app: HTMLDivElement): void => {
  void test(app, 'usleep', () => {
    const source = { a: 1, b: 2 };

    const result = withoutProperties(source, ['b']);

    testThis(source, { a: 1, b: 2 });
    testThis(result, { a: 1 });
  });
};
