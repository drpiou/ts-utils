'use strict';

import { append } from '../../lib';
import { test, expect } from './test';

export default (app: HTMLDivElement): void => {
  void test(app, 'append', () => {
    const source = ['a', 'b', 1];

    const result = append(source, 'a', 'z', 2);

    expect({ source, expect: ['a', 'b', 1] });
    expect({ result, expect: ['a', 'b', 1, 'a', 'z', 2] });
  });
};
