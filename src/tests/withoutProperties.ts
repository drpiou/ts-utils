'use strict';

import { withoutProperties } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'withoutProperties', () => {
    const source = { a: 1, b: 2 };

    const result = withoutProperties(source, ['b']);

    expect({ source, expect: { a: 1, b: 2 } });
    expect({ result, expect: { a: 1 } });
  });
};
